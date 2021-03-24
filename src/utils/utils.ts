export const changeBg = (selected: string, countryName: string) =>
  selected === countryName ? "black" : "none";


export const definePropertyName = (tag: string): string => {
    switch (tag) {
        case 'new':
            return 'newCases';
        case 'active':
            return 'active';
    }
    return 'newCases';
};

export const pickColor = (tag: string): string =>
    tag === 'active' ? 'yellow.500' : tag === 'deaths' ? 'gray.500' : tag === 'recovered' ? 'green.500' : 'pink';