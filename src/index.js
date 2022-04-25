const random3 = () => Math.floor(Math.random() * (4 - 1)) + 1;
const randomDate = () =>
    new Date(
        new Date("04-09-1999").getTime() +
        Math.random() * (new Date().getTime() - new Date("04-09-1999").getTime())
    );
const generateComment = (id) => ({
    id,
    userName: `Name ${id}`,
    description:
        "Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач.",
    pathToUserImg: `../public/img/user${random3()}.png`,
    date: randomDate(),
});

const post = {
    id: "postID:322",
    pathToPostImg: "../public/img/postImg.png",
    title: "Кот на учебе",
    description:
        "Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Повседневная практика показывает, что рамки и место обучения кадров представляет собой интересный эксперимент проверки соответствующий условий активизации. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что начало повседневной работы по формированию позиции способствует подготовки и реализации форм развития. Повседневная практика показывает, что сложившаяся структура организации позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач.",
    date: new Date("04-09-1998"),
    tags: Array.from({length: 10}, (_, index) => `Tag ${index + 1}`),
    likes: 12,
    comments: Array.from({length: 111}, (_, index) => {
        const comment = generateComment(index.toString());

        if (index % 3 === 0) {
            comment.children = new Array(3)
                .fill("")
                .map((_, childIndex) =>
                    generateComment(index.toString() + childIndex.toString())
                );
        }

        return comment;
    }),
};

/**
 * Create tags block
 * Создаёт блок тегов
 */
function createTags() {
    const tagsLayout = document.getElementsByClassName('tags')[0];
    post.tags.forEach((tagData) => {
        const tagNode = document.createElement('p');
        tagNode.classList.add('tag');
        tagNode.innerText = tagData;
        tagsLayout.append(tagNode);
    });

}

const title = document.getElementsByTagName('title')[0];
title.innerText = post.title;
const photo = document.getElementsByClassName('photo')[0];
photo.children[0].src = post.pathToPostImg;
const h1 = document.getElementsByClassName('title')[0];
h1.innerText = post.title;
const description = document.createElement('p');
description.innerText = post.description;
document.getElementsByClassName('description')[0].append(description);
const likes = document.createElement('p');
likes.innerText = post.likes;
const comments = document.createElement('p');
comments.innerText = String(post.comments.length);
document.getElementsByClassName('like')[0].append(likes);
document.getElementsByClassName('comment')[0].append(comments);
createTags();