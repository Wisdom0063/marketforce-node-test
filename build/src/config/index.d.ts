/**
 * This file load all configuration values from the .env file
 * @author Wisdom Kwarteng
 */
import convict from "convict";
declare const config: convict.Config<{
    NODE_ENV: string;
    PORT: number;
    DB_URL: string;
    TEST_DB_URL: string;
}>;
export default config;
