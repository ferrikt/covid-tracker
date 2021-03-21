import { useEffect, useState } from "react";
import { NewsData } from "../types";

export const useNewsData = (): [boolean, string | null, NewsData[] | null] => {
    const [isNewsLoading, setIsNewsLoading] = useState(true);
   
    const [newsData, setNewsData] = useState<NewsData[] | null>(null);

    useEffect(() => {
        setIsNewsLoading(true);
       
        let data = [
      {
          "title": "Novartis agrees to help make CureVac COVID-19 vaccine",
          "source": "MarketWatch",
          "date": "13 hours ago",
          "link": "https://news.google.com./articles/CBMiamh0dHBzOi8vd3d3Lm1hcmtldHdhdGNoLmNvbS9zdG9yeS9ub3ZhcnRpcy1hZ3JlZXMtdG8taGVscC1tYWtlLWN1cmV2YWMtY292aWQtMTktdmFjY2luZS0yMDIxLTAzLTA0LTc5MTIzMTHSAWZodHRwczovL3d3dy5tYXJrZXR3YXRjaC5jb20vYW1wL3N0b3J5L25vdmFydGlzLWFncmVlcy10by1oZWxwLW1ha2UtY3VyZXZhYy1jb3ZpZC0xOS12YWNjaW5lLTIwMjEtMDMtMDQ?hl=en-US&gl=US&ceid=US%3Aen"
      },
      {
          "title": "Ending mask mandates, eastern Idaho pushes 'personal responsibility' for COVID-19 control",
          "source": "Post Register",
          "date": "4 hours ago",
          "link": "https://news.google.com./articles/CBMisQFodHRwczovL3d3dy5wb3N0cmVnaXN0ZXIuY29tL2Nvcm9uYXZpcnVzL2VuZGluZy1tYXNrLW1hbmRhdGVzLWVhc3Rlcm4taWRhaG8tcHVzaGVzLXBlcnNvbmFsLXJlc3BvbnNpYmlsaXR5LWZvci1jb3ZpZC0xOS1jb250cm9sL2FydGljbGVfMDNjOGI4YWMtMWM0OS01NDFmLTllODItOGRjNDhhNDE3NDUzLmh0bWzSAbUBaHR0cHM6Ly93d3cucG9zdHJlZ2lzdGVyLmNvbS9jb3JvbmF2aXJ1cy9lbmRpbmctbWFzay1tYW5kYXRlcy1lYXN0ZXJuLWlkYWhvLXB1c2hlcy1wZXJzb25hbC1yZXNwb25zaWJpbGl0eS1mb3ItY292aWQtMTktY29udHJvbC9hcnRpY2xlXzAzYzhiOGFjLTFjNDktNTQxZi05ZTgyLThkYzQ4YTQxNzQ1My5hbXAuaHRtbA?hl=en-US&gl=US&ceid=US%3Aen"
      },
      {
          "title": "Universal Studios To Offer Dining, Shopping Access To Park | KIIS FM | undefined",
          "source": "On Air with Ryan Seacrest",
          "date": "6 hours ago",
          "link": "https://news.google.com./articles/CBMihAFodHRwczovL2tpaXNmbS5paGVhcnQuY29tL2ZlYXR1cmVkL2Nvcm9uYXZpcnVzLXVwZGF0ZXMvY29udGVudC8yMDIxLTAzLTA0LXVuaXZlcnNhbC1zdHVkaW9zLXRvLW9mZmVyLWRpbmluZy1zaG9wcGluZy1hY2Nlc3MtdG8tcGFyay_SAQA?hl=en-US&gl=US&ceid=US%3Aen"
      },
      {
          "title": "Controversial Md. Digital Ad Tax Leaves Sourcing Undefined",
          "source": "Law360",
          "date": "Yesterday",
          "link": "https://news.google.com./articles/CBMibGh0dHBzOi8vd3d3LmxhdzM2MC5jb20vdGVjaG5vbG9neS9hcnRpY2xlcy8xMzYxMDE5L2NvbnRyb3ZlcnNpYWwtbWQtZGlnaXRhbC1hZC10YXgtbGVhdmVzLXNvdXJjaW5nLXVuZGVmaW5lZNIBK2h0dHBzOi8vd3d3LmxhdzM2MC5jb20vYW1wL2FydGljbGVzLzEzNjEwMTk?hl=en-US&gl=US&ceid=US%3Aen"
      },
      {
          "title": "Sprouts sets new $300 million stock buyback program, after repurchasing no shares last year",
          "source": "MarketWatch",
          "date": "11 hours ago",
          "link": "https://news.google.com./articles/CBMimgFodHRwczovL3d3dy5tYXJrZXR3YXRjaC5jb20vc3Rvcnkvc3Byb3V0cy1zZXRzLW5ldy0zMDAtbWlsbGlvbi1zdG9jay1idXliYWNrLXByb2dyYW0tYWZ0ZXItcmVwdXJjaGFzaW5nLW5vLXNoYXJlcy1sYXN0LXllYXItMjAyMS0wMy0wND9saW5rPU1XX2xhdGVzdF9uZXdz0gGKAWh0dHBzOi8vd3d3Lm1hcmtldHdhdGNoLmNvbS9hbXAvc3Rvcnkvc3Byb3V0cy1zZXRzLW5ldy0zMDAtbWlsbGlvbi1zdG9jay1idXliYWNrLXByb2dyYW0tYWZ0ZXItcmVwdXJjaGFzaW5nLW5vLXNoYXJlcy1sYXN0LXllYXItMjAyMS0wMy0wNA?hl=en-US&gl=US&ceid=US%3Aen"
      },
      {
          "title": "Global Coroplast Sheets Market 2020 Research Report With COVID-19 Update – Key Players Analysis, Growth Factors and Forecast to 2026 – KSU | The Sentinel Newspaper",
          "source": "KSU | The Sentinel Newspaper",
          "date": "8 hours ago",
          "link": "https://news.google.com./articles/CBMipQFodHRwczovL2tzdXNlbnRpbmVsLmNvbS8yMDIxLzAzLzA0L2dsb2JhbC1jb3JvcGxhc3Qtc2hlZXRzLW1hcmtldC0yMDIwLXJlc2VhcmNoLXJlcG9ydC13aXRoLWNvdmlkLTE5LXVwZGF0ZS1rZXktcGxheWVycy1hbmFseXNpcy1ncm93dGgtZmFjdG9ycy1hbmQtZm9yZWNhc3QtdG8tMjAyNi_SAQA?hl=en-US&gl=US&ceid=US%3Aen"
      },
      {
          "title": "Miss Universe competition to air live from Florida in May",
          "source": "KGMI",
          "date": "Yesterday",
          "link": "https://news.google.com./articles/CBMiV2h0dHBzOi8va2dtaS5jb20vbmV3cy8wMzAwMzAtbWlzcy11bml2ZXJzZS1jb21wZXRpdGlvbi10by1haXItbGl2ZS1mcm9tLWZsb3JpZGEtaW4tbWF5L9IBAA?hl=en-US&gl=US&ceid=US%3Aen"
      },
      {
          "title": "OKC Dodgers Schedule Delayed Until May",
          "source": "News On 6",
          "date": "2 hours ago",
          "link": "https://news.google.com./articles/CBMiXWh0dHA6Ly93d3cubmV3c29uNi5jb20vc3RvcnkvNjA0MGFhZGNiYzBiZWUwYmQ2MzA4Njk5L29rYy1kb2RnZXJzLXNjaGVkdWxlLWRlbGF5ZWQtdW50aWwtbWF5LdIBAA?hl=en-US&gl=US&ceid=US%3Aen"
      },
      {
          "title": "Tulare County concerned over transition to Blue Shield",
          "source": "Foothills Sun Gazette",
          "date": "Yesterday",
          "link": "https://news.google.com./articles/CBMiaWh0dHBzOi8vdGhlc3VuZ2F6ZXR0ZS5jb20vYXJ0aWNsZS9uZXdzLzIwMjEvMDMvMDMvdHVsYXJlLWNvdW50eS1jb25jZXJuZWQtb3Zlci10cmFuc2l0aW9uLXRvLWJsdWUtc2hpZWxkL9IBAA?hl=en-US&gl=US&ceid=US%3Aen"
      },
      {
          "title": "Maharashtra: Police raids hookah parlour in Thane, arrests 18 for violating COVID-19 protocol",
          "source": "Firstpost",
          "date": "7 hours ago",
          "link": "https://news.google.com./articles/CAIiEL0bFz5vWijQl15GMRjsEUMqFwgEKg8IACoHCAow5v6PATDrwA8w3-Me?hl=en-US&gl=US&ceid=US%3Aen"
      }
  ];

        setNewsData(data);

        setIsNewsLoading(false);
    },[])

    return [isNewsLoading, null, newsData];
}