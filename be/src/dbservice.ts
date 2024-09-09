import { Prisma } from '@prisma/client';
import { prisma } from './prisma';

export default class DBService {
  private modelName: Prisma.ModelName;
  private model: any;

  constructor(modelName: Prisma.ModelName) {
    if (modelName === "Users") this.model = prisma.users;
    if (modelName === "Materials") this.model = prisma.materials;
    if (modelName === "Quizzes") this.model = prisma.quizzes;
    if (modelName === "Notifications") this.model = prisma.notifications;
    this.modelName = modelName;
  }

  public async index() {
    try {
      const items = await this.model.findMany();
      return items;
    } catch (err) {
      throw err;
    }
  }

  public async search(q: string) {
    try {
      const items = await this.model.findMany();

      const results = this.fuzzySearch(q, items);

      if (results.length < 1)
        throw new Error(`There is no ${this.modelName} with that query`);

      return results;
    } catch (err) {
      throw err;
    }
  }

  public async paginate(page: number) {
    try {
      const items = await this.model.findMany({
        skip: page * 10,
        take: 10,
      });

      return items;
    } catch (err) {
      throw err;
    }
  }

  public async read(id: string) {
    try {
      const item = await this.model.findUnique({where: {id: id}});

      if (!item) throw new Error(`${this.modelName} not found`);

      return item;
    } catch (err) {
      throw err;
    }
  }

  public async create(data: any) {
    try {
      if (!data || typeof data !== "object")
        throw new Error(`Invalid create data`);

      const item = await this.model.create({
        data: data
      })

      return item;
    } catch (err) {
      throw err;
    }
  }

  public async update(data: any) {
    try {
      if (!data || typeof data !== "object" || !data.id)
        throw new Error(`Invalid update data`);

      const item = await this.model.findUnique({where: {id: data.id}});

      if (!item) throw new Error(`${this.modelName} not found`);

      await this.model.update({
        where: {id: item.id},
        data: data,
      });

      const newItem = await this.model.findUniqueOrThrow({
        where: {id: data.id},
      });

      return newItem;
    } catch (err) {
      throw err;
    }
  }

  public async destroy(id: string) {
    try {
      const item = await this.model.findUnique({where: {id: id}});

      if (!item) throw new Error(`${this.modelName} not found`);

      await this.model.delete({where: {id: item.id}});

      return {message: `${this.modelName} deleted`};
    } catch (err) {
      throw err;
    }
  }

  /**
   * Take an array of object models and a search query. Scrape each model object and compare against search query.
   *
   * @param q The search query
   * @param items The array of object models
   */
  private fuzzySearch(q: string, items: Array<any>) {
    // Levenshtein distance function to calculate similarity
    function calculateLevenshteinDistance(
      query: string,
      target: string
    ): number {
      const queryLen = query.length;
      const targetLen = target.length;

      // Base cases
      if (queryLen === 0) return targetLen;
      if (targetLen === 0) return queryLen;

      // Create a matrix to store distances
      const matrix: number[][] = Array(queryLen + 1)
        .fill(null)
        .map(() => Array(targetLen + 1).fill(0));

      // Fill the first row and column with incremental edit distances
      for (let i = 0; i <= queryLen; i++) matrix[i][0] = i;
      for (let j = 0; j <= targetLen; j++) matrix[0][j] = j;

      // Calculate Levenshtein distance matrix
      for (let i = 1; i <= queryLen; i++) {
        for (let j = 1; j <= targetLen; j++) {
          const cost = query[i - 1] === target[j - 1] ? 0 : 1;

          matrix[i][j] = Math.min(
            matrix[i - 1][j] + 1, // Deletion
            matrix[i][j - 1] + 1, // Insertion
            matrix[i - 1][j - 1] + cost // Substitution
          );
        }
      }

      // The final distance is at the bottom-right corner of the matrix
      return matrix[queryLen][targetLen];
    }

    // Function to normalize and calculate the similarity score based on Levenshtein distance
    function calculateSimilarity(query: string, target: string): number {
      const maxLen = Math.max(query.length, target.length);
      if (maxLen === 0) return 1; // If both strings are empty, they are identical
      const distance = calculateLevenshteinDistance(query, target);

      // Normalize the score so that 1 means identical, 0 means completely different
      return 1 - distance / maxLen;
    }

    let results: any[] = [];

    // Go through each item in the array, assuming each item is an object and searching on some string property
    items.forEach((item) => {

      // Check if the item is an object
      if (typeof item === "object" && item !== null) {

        // Iterate through each key-value pair in the object
        Object.entries(item).forEach(([key, value]) => {

          // Check if the value is a string, perform the similarity calculation, and add to results if above threshold
          if (typeof value === "string") {

            // First, check if the query is a substring or prefix of the value
            if (value.toLowerCase().includes(q.toLowerCase())) {
              results.push(item);

            // Otherwise, check the similarity between query and value
            } else if (calculateSimilarity(q, value) > 0.5) {
              results.push(item);
            }
          }
        });
      }
    });

    return results;
  }
}