const parseManaCosts = (manaCosts) => {
  const found = [];
  if (manaCosts !== undefined) {
    const rxp = /{([^}]+)}/g;
    let curMatch;

    while (curMatch = rxp.exec(manaCosts)) {
      found.push(curMatch[1]);
    }
  }

  return found;
};

export {
  parseManaCosts,
}