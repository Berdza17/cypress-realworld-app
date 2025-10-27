import { faker } from '@faker-js/faker';
import { User } from '../models/User';

/**
 * Test users loaded from environment variables
 */
export const testUsers = {
  heath: { 
    firstName: process.env.TEST_USER_FIRST_NAME!, 
    lastName: process.env.TEST_USER_LAST_NAME!, 
    username: process.env.TEST_USER_USERNAME!, 
    password: process.env.TEST_USER_PASSWORD! 
  },
  dina: { 
    firstName: process.env.TEST_USER_2_FIRST_NAME!,
    lastName: process.env.TEST_USER_2_LAST_NAME!, 
    username: process.env.TEST_USER_2_USERNAME!, 
    password: process.env.TEST_USER_2_PASSWORD! 
  },
} as const;

/**
 * Simple data factory for generating test data
 */
export class DataFactory {
  /**
   * Generate a user with optional parameters
   * @param firstName - Optional first name
   * @param lastName - Optional last name  
   * @param username - Optional username
   * @param password - Optional password
   * @returns User object with generated or provided data
   */
  static createUser(
    firstName?: string,
    lastName?: string,
    username?: string,
    password?: string
  ): User {
    const finalFirstName = firstName || faker.person.firstName();
    const finalLastName = lastName || faker.person.lastName();
    const finalUsername = username || `${finalFirstName}${finalLastName}${faker.number.int({ min: 10, max: 99 })}`.toLowerCase();
    const finalPassword = password || process.env.DEFAULT_USER_PASSWORD!;

    return {
      firstName: finalFirstName,
      lastName: finalLastName,
      username: finalUsername,
      password: finalPassword,
    };
  }


  /**
   * Get a random hardcoded test user
   * @returns User object from hardcoded users
   */
  static getRandomTestUser(): User {
    const users = Object.values(testUsers);
    return faker.helpers.arrayElement(users);
  }
}
