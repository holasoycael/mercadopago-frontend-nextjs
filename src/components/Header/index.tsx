import IconWhatsApp from 'app/icons/FilledWhatsApp'
import Link from 'next/link'

import * as S from './styles'

function Header() {
  return (
    <S.Wrapper>
      <a href="/">
        <div className="LOGOMARCAbracaelSmall"></div>
      </a>
      <div>
        <Link href="/">
          <S.Href>
            <IconWhatsApp size={16} />
            Suporte
          </S.Href>
        </Link>
      </div>
    </S.Wrapper>
  )
}

export default Header
