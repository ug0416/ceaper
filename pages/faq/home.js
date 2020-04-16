import BaseLayout from '../../layouts/base.js';
import Link from 'next/link';
import Search from "../../assets/icons/ui/search.js";
import Bug from "../../assets/icons/ui/bug.js";
import Base from "../../assets/icons/ui/base-color.js";
import Account from "../../assets/icons/ui/account-color.js";
import Support from "../../assets/icons/ui/support-color.js";
import Security from "../../assets/icons/ui/security-color.js";
import ArrowR from "../../assets/icons/ui/arrow-r.js";
import Feedback from "../../layouts/feedback.js";

export default() => (<BaseLayout>
  <div id="page">

    <div className='contents bg-grey'>
      <div className='section center-section'>
        <div className="search-wrapper faq-search">
          <span className="search-icon">
            <span className="search-icon-inner"><Search/></span>
          </span>
          <input className="search" type="search" name="q" placeholder="お困りのキーワードで検索"/>
        </div>
      </div>
    </div>

    <div className='contents'>
      <div className='section'>
        <div className="faq-cat-wrapper">

          <div className="faq-cat-inner card">
            <div className="faq-cat-inner-l">
              <Base/>
            </div>
            <div className="faq-cat-inner-r">
              <h3>Ceaperについて</h3>
              <div className="faq-cat-link-wrapper">
                <Link href="/">
                  <a className="hover-line faq-cat-link ico-back xs-text xs-icon">Ceaperとは？<ArrowR/></a>
                </Link>
                <Link href="/">
                  <a className="hover-line faq-cat-link ico-back xs-text xs-icon">使い方<ArrowR/></a>
                </Link>
                <Link href="/">
                  <a className="hover-line faq-cat-link ico-back xs-text xs-icon">ランキングの基準<ArrowR/></a>
                </Link>
              </div>
            </div>
          </div>

          <div className="faq-cat-inner card">
            <div className="faq-cat-inner-l">
              <Account/>
            </div>
            <div className="faq-cat-inner-r">
              <h3>アカウント</h3>
              <div className="faq-cat-link-wrapper">
                <Link href="/faq/account/01アカウントの作成">
                  <a className="hover-line faq-cat-link ico-back xs-text xs-icon">アカウントの作成<ArrowR/></a>
                </Link>
                <Link href="/">
                  <a className="hover-line faq-cat-link ico-back xs-text xs-icon">アカウントの管理<ArrowR/></a>
                </Link>
                <Link href="/">
                  <a className="hover-line faq-cat-link ico-back xs-text xs-icon">アカウントの削除<ArrowR/></a>
                </Link>
              </div>
            </div>
          </div>

          <div className="faq-cat-inner card">
            <div className="faq-cat-inner-l">
              <Support/>
            </div>
            <div className="faq-cat-inner-r">
              <h3>サポート</h3>
              <div className="faq-cat-link-wrapper"></div>
            </div>
          </div>

          <div className="faq-cat-inner card">
            <div className="faq-cat-inner-l">
              <Security/>
            </div>
            <div className="faq-cat-inner-r">
              <h3>規約・個人情報の扱い</h3>
              <div className="faq-cat-link-wrapper"></div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <Feedback/>

  </div>
</BaseLayout>)