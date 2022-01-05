const add = (a,b) => a + b;
const greeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Should add two numbers', () => {
    const result = add(3 ,4);

    expect(result).toBe(7);
});

test('Should show correct greeting', () => {
    const result = greeting('Rafał');

    expect(result).toBe('Hello Rafał!');
});

test('Should show correct greeting with no argument', () => {
    const defaultResult = greeting();

    expect(defaultResult).toBe('Hello Anonymous!');
});
