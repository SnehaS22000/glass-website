import { Component, signal } from '@angular/core';
import { Category } from '../../../../core/models/categories.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-featured-collections',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './featured-collections.component.html',
  styleUrl: './featured-collections.component.scss'
})
export class FeaturedCollectionsComponent {
  categories = signal<Category[]>([
    { id: '1', name: 'Etheral Spire', count: '$1200', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY6wGc430PC9OffIAtvdh08D8RKMY6m4pT0Gfnm6gphxpb3gqnLc22v68AFLY4yZum7HE6nio1xOELzLnaUoZXKh2OgOFf_fmd2wSC638zJvxw7Kk6pHzRFtRiJJJFj7nwozlYycRgLhH1di99psAcCA3_XWgqBW_dE6q0TR-XdE8l9XjWG7ANgBB3ABR9gRjCKhHVNckcuUs08R3ScHF_O_14XUEvRqfunkHSoRsaliFDPBzgFyneG0tQJTYeIuBSnIk66V2YdVw' },
    { id: '2', name: 'Bloom Bowl', count: '$890', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhj2UY80rnwnxZPfZ1yLjmYxL-KPqOvpVYU1DLvRe0ab0rIjKtJP7QrwS-SxHaEeex3wZdjF9n9llbaz6lSIqdbfJoHb3aoqU9tLSp6ywGWHwEsts6slIFUwts3z3WxY2DdY-i4vs-gyKSl-L4CIdAXv7OFDZnyDForpb85c-IADLL8YAm-9UD111uJidd7VzUxkw-DStubf9URIVJanc32TCtDagVKORqjjUmyPktzJUjxA2p731lxtMFjnlihHagWNcB1jCclRA' },
    { id: '3', name: 'Chrome Pillar', count: '$2800', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJz3BVQQ1ExLKET330oZUhi5-PRahhuMTWfUGoVK6ld3VFqT51Tw4PRgGfcX4B72LevDAUlH3oUccCf12wOcp1JZ8cd-zys74ibLdxa9ox0mFiwuufrAgVXG5uSGHOx9DDihfLIDQG6zRu0An1x8ScBR47Yemh8hV1benl9B8TdtpUJKMHheTN03Kp-YKwIu_MvzTdiRa88FQ3ykPp9czfLbnUc0WDIzIxV-cY-DO93rEsrDGWoxslT3zOcAyF6-zjgG8TvRhy7Js' },
    {
      id: '4', name: 'Sky Dancer', count: '$950', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaecaLQa_eDLBtKoPG0bZNdqRN2rluNIx_N7hJSrLeKlxIJGtcbTpSZ0LxIoxMlxjoDr2T6_Jn0nGNCht0N0hIB1MF0pvdRAgeX6pWNrp1ttFK4QjbiCnpHmGASi7xlSb5njjP8dG3gByP4xxwAfIiygzaqgLvoc_tykV3Ju1fESkJ2tSCFC8uNv-EgtogEFm4_jK6lOVSJh7EX2wQwI7dTbPsF47iqHkujQ2n4zaHI42OagM-36VE1NYeTS_N0w_R9NVggBPuIPk'
    },
  ]);
}
