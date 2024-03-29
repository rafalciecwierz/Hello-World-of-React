import {
    setStartDate,
    setEndDate,
    sortByDate,
    sortByAmount,
    setTextFilter
} from "../../actions/filters";
import moment from 'moment';

test('should generate start date action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate end date action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate sort by date action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate sort by amount action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should generate set text filter action object', () => {
    const inputText = 'Some value'
    const action = setTextFilter(inputText);

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: inputText
    });
});

test('should generate set text filter action object with default value', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});