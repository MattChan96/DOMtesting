const renderDom = require('./helpers')

let dom;
let document;

describe("index.html", () => {
    beforeEach( async() => {
        dom = await renderDom('index.html');
        document = await dom.window.document;
    })

    test('it has a title', () => {
        let title = document.querySelector('title');
        expect(title).toBeTruthy();
    })

    test('h1 says sth about lotr', () => {
        let h1 = document.querySelector('h1');
        expect(h1.innerHTML).toContain('The LOR')
    })
    test('h1 is updated when hit btton', () => {
        const btn = document.querySelector("#updateButton");
        btn.dispatchEvent(new dom.window.Event('click'));
        const h1 = document.querySelector('h1');
        expect(h1.textContent).toBe('you hit me');
})
});
