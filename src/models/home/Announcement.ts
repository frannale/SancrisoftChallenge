export interface Announcement {
  backgroundColor: string;
  ctaLabel: string;
  ctaUrl: string;
  intro: string;
  message: string;
}

interface AnnouncementCollection {
  items: Announcement[];
}

export interface GetAnnouncementsResponse {
  announcementCollection: AnnouncementCollection;
}
