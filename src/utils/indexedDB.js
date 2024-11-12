import { openDB } from "idb";

const dbPromise = openDB("komentar", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("comments")) {
      db.createObjectStore("comments", { keyPath: "id", autoIncrement: true });
    }
  },
});

export const saveComment = async (comment) => {
  try {
    const db = await dbPromise;
    return db.add("comments", comment);
  } catch (error) {
    console.error("Gagal menyimpan komentar:", error);
    throw error;
  }
};
