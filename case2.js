// Case 2 (Soal No.5)
// Diketahui data berikut ini.

// Junior Fullstack - Technical Test 2

const comments = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];
// 5. Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.

function countComments(comments) {
  let result = 0;
  for (const comment of comments) {
    result += 1;
    if (comment.replies?.length > 0) {
      // rekursiv
      result += countComments(comment.replies);
    }
  }
  return result;
}

console.log(countComments(comments));
