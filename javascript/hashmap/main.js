class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = [];
    this.length = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode % 13;
  }

  set(key, value) {
    let index = this.hash(key);

    let bucket = this.buckets[index];

    if (bucket === undefined) {
      bucket = [];
      bucket.push({ key, value });
      this.buckets[index] = bucket;
      this.length += 1;
    } else {
      for (const element of bucket) {
        if (element.key == key) {
          element.value = value;
          return;
        }
      }
      bucket.push({ key, value });
    }
  }

  get(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];

    if (bucket == undefined) {
      return null;
    } else {
      for (const element of bucket) {
        if (element.key == key) {
          return element.value;
        }
      }
    }
  }

  has(key) {
    let hasIt = false;
    let index = this.hash(key);
    let bucket = this.buckets[index];

    if (bucket == undefined) {
      return hasIt;
    } else {
      for (const element of bucket) {
        if (element.key == key) {
          hasIt = true;
          return hasIt;
        }
      }
    }
  }

  remove(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];

    if (bucket == undefined) {
      return false;
    } else {
      for (const element of bucket) {
        if (element.key == key) {
          this.buckets[index] = null;
          this.length += 1;
        }
      }
    }
  }

  getLength() {
    return this.length;
  }

  clear() {
    this.buckets = [];
    this.length = 0
  }

  getKeys() {
    let keys = [];

    for (bucket of this.buckets)
      for (const element of bucket) {
        keys.push(element.key);
      }
    return keys;
  }

  getValues() {
    let values = [];

    for (bucket of this.buckets)
      for (const element of bucket) {
        values.push(element.value);
      }
    return values;
  }

  getEntries() {
    let entries = [];

    for (bucket of this.buckets)
      for (const element of bucket) {
        values.push([element.key ,element.value]);
      }
    return entries;
  }
}

let map = new HashMap(0.75, 3000);
map.set("apple", "red");
map.set("apple", "red");
map.set("banana", "yellow");
map.set("nyuszi", "oki");
