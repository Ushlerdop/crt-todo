function sleep(ms: number = 0): Promise<NodeJS.Timeout> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default sleep