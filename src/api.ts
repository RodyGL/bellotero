import axios from 'axios';

export interface GetMenuResponse {
  menu: {
    items: Array<{ text: string; route: string }>;
  };
}

export interface GetTestimonialsResponse {
  slider: {
    title: string;
    reviews: Array<{ name: string; position: string; comment: string }>;
  };
}

export interface GetCalculatorResponse {
  calculator: {
    title: string;
    description: string;
  };
}

export const api = {
  async getMenu() {
    return axios.get<GetMenuResponse>(
      'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json'
    );
  },

  async getTestimonials() {
    return axios.get<GetTestimonialsResponse>(
      'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json'
    );
  },

  async getCalculator() {
    return axios.get<GetCalculatorResponse>(
      'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json'
    );
  },
};
