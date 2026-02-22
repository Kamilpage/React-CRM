export const createNote = ({ title, content, tags, author }) => ({
    id: Date.now(),
    title,
    content,
    tags,
    author: {
        id: author.id,
        name: author.name,
        avatar: author.avatar,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
});
