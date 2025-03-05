import { Component } from '@angular/core';
import{faPadlet ,faAccessibleIcon,faFacebook,faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  l = faPadlet
  s = faAccessibleIcon
  f = faFacebook
  t = faTwitter
  i = faInstagram
  lin = faLinkedin
  div_appear = false
  card_appear = false
  left_appear=false
  right_appear=false
}
