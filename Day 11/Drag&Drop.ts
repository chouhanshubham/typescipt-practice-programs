import {test, expect} from '@playwright/test';

test('Drag and Drop', async ({page}) => {
await page.goto('https://the-internet.herokuapp.com/drag_and_drop');    

const source =  page.locator('dragabble');
const target = page.locator('droppable');

await source.dragTo(target);

await expect(target).toHaveClass(/dropped/);




});

await source.hover();
await target.hover();

