enum KeyType {
  HEX,
  INT,
}

type Key<T extends KeyType> = T extends KeyType.INT ? number : string;

const random =
  <T extends KeyType>(type: T) =>
  (length = 8): Key<T> => {
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    const result = Array.from(array, v => v.toString(16).padStart(2, '0')).join(
      ''
    );
    const key = type === KeyType.INT ? parseInt(result, 16) : result;

    return key as Key<T>;
  };

export const randomKey = random(KeyType.HEX);
export const randomId = random(KeyType.INT);
