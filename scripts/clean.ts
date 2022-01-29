import fs from 'fs';

const {
  promises: { rm }
} = fs;

const { cwd } = process;

const dir = `${cwd()}/dist`;

const removeDistDirectory = async () => {
  try {
    await rm(dir, { recursive: true });
  } catch (error) {
    console.error(error);
  }
};

removeDistDirectory();
