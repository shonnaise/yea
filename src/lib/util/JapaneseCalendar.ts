const JapaneseEras = ['明治', '大正', '昭和', '平成', '令和'] as const;
const JapaneseShortEras = ['M', 'T', 'S', 'H', 'R'] as const;
export type JapaneseEra = typeof JapaneseEras[number];
export type JapaneseShortEra = typeof JapaneseShortEras[number];

export type JapaneseDate = {
    era: JapaneseShortEra,
    year: number,
    month: number,
    day: number,
};

export const getJapaneseCalendarDate = (year: number, month: number, day: number): JapaneseDate => {
    const date = new Date(year, month - 1, day);
    const japaneseDateStr = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {era: 'narrow'}).format(date);
    const matched = /^([A-Z])([0-9]+)\/([0-9]+)\/([0-9]+)/.exec(japaneseDateStr);
    if (!matched) {
        throw new Error("年月日を取得できませんでした。");
    }
    isJapaneseShortEra(matched[1]);
    return {
        era: matched[1],
        year: Number(matched[2]),
        month: Number(matched[3]),
        day: Number(matched[4]),
    };
};
/**
 * 年号のアサーション関数
 * @param shortEra 年号の文字
 * @returns アサーション結果
 */
function isJapaneseShortEra(shortEra: string): asserts shortEra is JapaneseShortEra {
    switch (shortEra) {
        case 'M':
        case 'T':
        case 'S':
        case 'H':
        case 'R':
            return;
        default:
            throw new Error("存在しない年号です。");
    }
}
