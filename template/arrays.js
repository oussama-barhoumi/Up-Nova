
class Achievement {
  constructor(id, title, earnedAt) {
    this.id = id;
    this.title = title;
    this.earnedAt = earnedAt;
  }
}

class User {
  constructor(id, name, avatar, achievements = [], createdAt, updatedAt) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.achievements = achievements;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

class Post {
  constructor(
    id,
    userId,
    content = { text: '', images: [], videos: [] },
    upvotes = 0,
    downvotes = 0,
    commentsCount = 0,
    topCommentId = null,
    createdAt,
    updatedAt
  ) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.upvotes = upvotes;
    this.downvotes = downvotes;
    this.commentsCount = commentsCount;
    this.topCommentId = topCommentId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

class Comment {
  constructor(
    id,
    postId,
    userId,
    parentCommentId = null,
    content = { text: '', images: [], videos: [] },
    upvotes = 0,
    downvotes = 0,
    score = 0,
    createdAt,
    updatedAt
  ) {
    this.id = id;
    this.postId = postId;
    this.userId = userId;
    this.parentCommentId = parentCommentId;
    this.content = content;
    this.upvotes = upvotes;
    this.downvotes = downvotes;
    this.score = score;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

class Follow {
  constructor(followerId, followingId, createdAt) {
    this.followerId = followerId;
    this.followingId = followingId;
    this.createdAt = createdAt;
  }
}


class ThemePreference {
  constructor(id, userId, theme, changedAt) {
    this.id = id;
    this.userId = userId;
    this.theme = theme; 
    this.changedAt = changedAt;
  }
}

export const themePreferences = [];

export function saveThemePreference({ userId = null, theme }) {
  const id = themePreferences.length + 1;
  const changedAt = new Date().toISOString();
  const pref = new ThemePreference(id, userId, theme, changedAt);
  themePreferences.push(pref);
  return pref;
}

export { Achievement, User, Post, Comment, Follow, ThemePreference };