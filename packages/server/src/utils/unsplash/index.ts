import got from 'got'
import { OptionsOfTextResponseBody } from 'got/dist/source/types'

const SEARCH_PHOTO_API_URL = 'https://api.unsplash.com/search/photos'
const TRACK_DOWNLOAD_REGEX = /^https:\/\/api\.unsplash\.com\/photos\/[^\/]+\/download[^\/]+/i

interface User {
  id: string
  username: string
  name: string
  first_name: string
  last_name: string
  instagram_username: string
  twitter_username: string
  portfolio_url: string
  profile_image: ProfileImage
  links: UserLinks
}

interface ProfileImage {
  small: string
  medium: string
  large: string
}

interface UserLinks {
  self: string
  html: string
  photos: string
  likes: string
}

interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}

interface PhotoLinks {
  self: string
  html: string
  download: string
}

export interface UN_Photo {
  id: string
  created_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  likes: number
  liked_by_user: boolean
  description: string
  user: User
  current_user_collections: any[]
  urls: Urls
  links: PhotoLinks
}

export interface UN_PhotoResult {
  results: UN_Photo[]
  total: number
  totalPages: number
}

export interface UN_TrackDownloadResult {
  url: string
}

export interface UnsplashConfig {
  clientId: string
}

export class Unsplash {
  private readonly clientId: string

  constructor(config: UnsplashConfig) {
    this.clientId = config.clientId
  }

  static init(config: UnsplashConfig): Unsplash {
    return new Unsplash(config)
  }

  async search(query: string, page = 1, limit = 24): Promise<UN_PhotoResult> {
    return this.request(SEARCH_PHOTO_API_URL, {
      // see https://unsplash.com/documentation#parameters-16
      searchParams: {
        query,
        page,
        per_page: limit
      }
    })
  }

  async trackDownload(url: string): Promise<UN_TrackDownloadResult> {
    if (!TRACK_DOWNLOAD_REGEX.test(url)) {
      throw new Error('Invalid unsplash tracking download URL')
    }
    return this.request(url)
  }

  request(url: string, options?: OptionsOfTextResponseBody): Promise<any> {
    return got(url, {
      ...options,
      method: options?.method || 'GET',
      headers: {
        ...options?.headers,
        Authorization: `Client-ID ${this.clientId}`
      },
      timeout: 30_000
    }).json()
  }
}
