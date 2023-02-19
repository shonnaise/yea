import { getJapaneseCalendarDate } from "../JapaneseCalendar";

describe('年号境界', () => {
    test('明治最終日', () => {
        const japaneCalendarDate = 
        expect(getJapaneseCalendarDate(1912, 7, 29)).toEqual({
            era: 'M',
            year: 45,
            month: 7,
            day: 29,
        })        
    });
    test('大正初日', () => {
        const japaneCalendarDate = 
        expect(getJapaneseCalendarDate(1912, 7, 30)).toEqual({
            era: 'T',
            year: 1,
            month: 7,
            day: 30,
        })        
    });
    test('大正最終日', () => {
        const japaneCalendarDate = 
        expect(getJapaneseCalendarDate(1926, 12, 24)).toEqual({
            era: 'T',
            year: 15,
            month: 12,
            day: 24,
        })        
    });
    test('昭和初日', () => {
        const japaneCalendarDate = 
        expect(getJapaneseCalendarDate(1926, 12, 25)).toEqual({
            era: 'S',
            year: 1,
            month: 12,
            day: 25,
        })        
    });
    test('昭和最終日', () => {
        const japaneCalendarDate = 
        expect(getJapaneseCalendarDate(1989, 1, 7)).toEqual({
            era: 'S',
            year: 64,
            month: 1,
            day: 7,
        })        
    });
    test('平成初日', () => {
        const japaneCalendarDate = 
        expect(getJapaneseCalendarDate(1989, 1, 8)).toEqual({
            era: 'H',
            year: 1,
            month: 1,
            day: 8,
        })        
    });
    test('平成最終日', () => {
        const japaneCalendarDate = 
        expect(getJapaneseCalendarDate(2019, 4, 30)).toEqual({
            era: 'H',
            year: 31,
            month: 4,
            day: 30,
        })        
    });
    test('令和初日', () => {
        const japaneCalendarDate = 
        expect(getJapaneseCalendarDate(2019, 5, 1)).toEqual({
            era: 'R',
            year: 1,
            month: 5,
            day: 1,
        })        
    });
});
