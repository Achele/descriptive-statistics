class DescriptiveStatistics {
  constructor(data) {
    this.data = data;
  }

  // Measures of Central Tendency
  mean() {
    return this.data.reduce((acc, val) => acc + val, 0) / this.data.length;
  }

  median() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);
    return sortedData.length % 2 === 0
      ? (sortedData[middle - 1] + sortedData[middle]) / 2
      : sortedData[middle];
  }

  mode() {
    const frequencyMap = new Map();
    this.data.forEach((num) => {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });

    let mode;
    let maxFrequency = 0;
    frequencyMap.forEach((frequency, num) => {
      if (frequency > maxFrequency) {
        maxFrequency = frequency;
        mode = num;
      }
    });

    return mode;
  }

  // Measures of Dispersion
  range() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    return sortedData[sortedData.length - 1] - sortedData[0];
  }

  variance() {
    const meanValue = this.mean();
    const squaredDifferences = this.data.map((num) =>
      Math.pow(num - meanValue, 2)
    );
    return (
      squaredDifferences.reduce((acc, val) => acc + val, 0) / this.data.length
    );
  }

  standardDeviation() {
    return Math.sqrt(this.variance());
  }
}

// Example usage
const data = [2, 4, 4, 4, 5, 5, 7, 9];
const stats = new DescriptiveStatistics(data);

console.log("Mean:", stats.mean());
console.log("Median:", stats.median());
console.log("Mode:", stats.mode());
console.log("Range:", stats.range());
console.log("Variance:", stats.variance());
console.log("Standard Deviation:", stats.standardDeviation());
