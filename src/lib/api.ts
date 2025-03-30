import { GoteborgCoApi, WpEntity } from '@goteborgco/open-api-js-client';
import { config } from './config';

const api = new GoteborgCoApi(config.gbgco.apiUrl, config.gbgco.apiKey);

export async function getGuides(): Promise<WpEntity[]> {
  try {
    const fields = `
      guides {
        id
        title
        excerpt
        link
        featuredmedia {
          id
          alt_text
          credit
          sizes {
            medium {
              source_url
            }
          }
        }
      }
    `;

    const response = await api.guides().list(
      { lang: 'sv', per_page: 6, page: 1 }, 
      undefined,
      fields
    );

    return response || [];
  } catch (error) {
    if (error instanceof Error) {
      console.error('API Error:', error.message);
    }
    return [];
  }
}

export async function getEvents(): Promise<WpEntity[]> {
  try {
    const fields = `
      events {
        id
        title
        excerpt
        link
        date
        featuredmedia {
          id
          alt_text
          credit
          sizes {
            medium {
              source_url
            }
          }
        }
      }
    `;

    const response = await api.events().list(
      { lang: 'sv', per_page: 6, page: 1 },
      undefined,
      fields
    );

    return response.events || [];
  } catch (error) {
    if (error instanceof Error) {
      console.error('API Error:', error.message);
    }
    return [];
  }
}