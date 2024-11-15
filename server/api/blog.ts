import { defineEventHandler } from 'h3';
import { parse } from 'node-html-parser';

export default defineEventHandler(async (event) => {
  try {
    // Fetch HTML data from the page
    const htmlContent = await $fetch<string>('https://remaster.realmofthemadgod.com/?page_id=15');

    const root = parse(htmlContent);

    const imgTags = root.querySelectorAll('img');
    const imgTexts = imgTags.map(tag => tag.getAttribute('src'));
    const img1 = imgTexts[5];
    const img2 = imgTexts[6];
    const img3 = imgTexts[7];

    const h2Tags = root.querySelectorAll('h2.entry-title');
    const h2Texts = h2Tags.map(tag => tag.text.trim());
    const h21 = h2Texts[0];
    const h22 = h2Texts[1];
    const h23 = h2Texts[2];

    const pTags = root.querySelectorAll('p');
    const pTexts = pTags.map(tag => tag.text.trim().split('Read more')[0].trim());
    const p1 = pTexts[2];
    const p2 = pTexts[4];
    const p3 = pTexts[6];

    const aTags = root.querySelectorAll('a');
    const aTexts = aTags.map(tag => tag.getAttribute('href'));
    const a1 = aTexts[15];
    const a2 = aTexts[18];
    const a3 = aTexts[21];

    const timeTags = root.querySelectorAll('time');
    const timeTexts = timeTags.map(tag => tag.text.trim());
    const time1 = timeTexts[0];
    const time2 = timeTexts[2];
    const time3 = timeTexts[4];

    return { img1, img2, img3, h21, h22, h23, p1, p2, p3, a1, a2, a3, time1, time2, time3 };
  } catch (error) {
    // Handle any errors in fetching data
    return { error: 'Failed to fetch blog data' };
  }
});