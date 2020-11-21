<template>
  <div class="layout">
    <header id="masthead" class="header container mx-auto">
            <div class="flex justify-between items-center">
                <div class="sitelogo">
                    <g-link to="/">
                      <img src="http://melagridsome.local/wp-content/uploads/2020/11/the-malena-law-firm-logo-black.png">
                    </g-link>
                </div>
                <!--Menu-->
                <nav class="header__nav">
                    <div class="menu-main-menu-container">
                         <ul id="menu-main-menu" class="menu">
                            <li class="menu-item">
                                <g-link class="nav__link" to="/">Home</g-link>
                            </li>
                            <li class="menu-item">
                                <g-link class="nav__link" to="/services">Services</g-link>
                            </li>
                            <li class="menu-item">
                                <g-link class="nav__link" to="/about">About</g-link>
                            </li>
                            <li class="btn--contact menu-item ">
                                <g-link class="nav__link" to="/contact">Contact</g-link>
                            </li>
                          </ul>
                    </div>
                </nav>
                <!--/Menu-->
            </div>
        </header>
        <slot/>
  </div>
</template>

<style>

.title--1 {
    @apply font-bold font-playfair;
    font-size: rem(64px);
    line-height: rem(90px);
}

.title--2 {
    @apply font-bold font-playfair;
    font-size: rem(48px);
    line-height: rem(67px);
}

.title--3 {
    @apply font-bold font-playfair;
    font-size: rem(36px);
    line-height: rem(51px);
}

.title--4 {
    @apply font-bold font-playfair;
    font-size: rem(24px);
    line-height: rem(34px);
}

.title--5 {
    @apply font-bold font-playfair;
    font-size: rem(18px);
    line-height: rem(25px);
}

.title--6 {
    @apply font-bold font-playfair;
    font-size: rem(16px);
    line-height: rem(22px);
}

.title--lead {
    @apply font-medium font-inter;
    font-size: rem(18px);
    line-height: rem(30px);
}

.title--body{
    @apply font-normal font-inter;
    font-size: rem(16px);
    line-height: rem(26px);
}

.title--button{
    @apply font-bold font-inter;
    font-size: rem(16px);
    letter-spacing: 0.02em;
    line-height: rem(16px);
}

.title--overline{
    @apply font-bold uppercase font-inter;
    font-size: rem(14px);
    letter-spacing: 0.1em;
    line-height: rem(16px);
}

.title--caption{
    @apply font-normal font-inter;
    font-size: rem(14px);
    line-height: rem(16px);
    letter-spacing: 0.4px;
}

@screen sm{

  .title-sm--1 {
      @apply font-bold font-playfair;
      font-size: rem(64px);
      line-height: rem(90px);
  }

  .title-sm--2 {
      @apply font-bold font-playfair;
      font-size: rem(48px);
      line-height: rem(67px);
  }

  .title-sm--3 {
      @apply font-bold font-playfair;
      font-size: rem(36px);
      line-height: rem(51px);
  }

  .title-sm--4{
      @apply font-bold font-playfair;
      font-size: rem(24px);
      line-height: rem(34px);
  }

  .title-sm--5 {
      @apply font-bold font-playfair;
      font-size: rem(18px);
      line-height: rem(25px);
  }

  .title-sm--6 {
      @apply font-bold font-playfair;
      font-size: rem(16px);
      line-height: rem(22px);
  }

}

@screen md{
  .title-md--1 {
      @apply font-bold font-playfair;
      font-size: rem(64px);
      line-height: rem(90px);
  }

  .title-md--2 {
      @apply font-bold font-playfair;
      font-size: rem(48px);
      line-height: rem(67px);
  }

  .title-md--3 {
      @apply font-bold font-playfair;
      font-size: rem(36px);
      line-height: rem(51px);
  }

  .title-md--4{
      @apply font-bold font-playfair;
      font-size: rem(24px);
      line-height: rem(34px);
  }

  .title-md--5 {
      @apply font-bold font-playfair;
      font-size: rem(18px);
      line-height: rem(25px);
  }

  .title-md--6 {
      @apply font-bold font-playfair;
      font-size: rem(16px);
      line-height: rem(22px);
  }
}

@screen lg{
  .title-lg--1 {
      @apply font-bold font-playfair;
      font-size: rem(64px);
      line-height: rem(90px);
  }

  .title-lg--2 {
      @apply font-bold font-playfair;
      font-size: rem(48px);
      line-height: rem(67px);
  }

  .title-lg--3 {
      @apply font-bold font-playfair;
      font-size: rem(36px);
      line-height: rem(51px);
  }

  .title-lg--4{
      @apply font-bold font-playfair;
      font-size: rem(24px);
      line-height: rem(34px);
  }

  .title-lg--5 {
      @apply font-bold font-playfair;
      font-size: rem(18px);
      line-height: rem(25px);
  }

  .title-lg--6 {
      @apply font-bold font-playfair;
      font-size: rem(16px);
      line-height: rem(22px);
  }
}

@screen xl{
  .title-xl--1 {
      @apply font-bold font-playfair;
      font-size: rem(64px);
      line-height: rem(90px);
  }

  .title-xl--2 {
      @apply font-bold font-playfair;
      font-size: rem(48px);
      line-height: rem(67px);
  }

  .title-xl--3 {
      @apply font-bold font-playfair;
      font-size: rem(36px);
      line-height: rem(51px);
  }

  .title-xl--4{
      @apply font-bold font-playfair;
      font-size: rem(24px);
      line-height: rem(34px);
  }

  .title-xl--5 {
      @apply font-bold font-playfair;
      font-size: rem(18px);
      line-height: rem(25px);
  }

  .title-xl--6 {
      @apply font-bold font-playfair;
      font-size: rem(16px);
      line-height: rem(22px);
  }
}


::selection {
    @apply text-white bg-primary;
}

html {
    box-sizing: border-box;
    scroll-behavior: smooth;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    @apply font-normal text-dark-1 font-inter;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: rem(16px);
    line-height: 26px;
    hyphens: none;
    word-break: keep-all;
    word-wrap: normal;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6 {
        @apply font-bold mb-4 text-dark-1 font-playfair;
        hyphens: none;
        letter-spacing: -0.02em;
        word-break: keep-all;
        word-wrap: normal;
        a {
            @apply text-light-3;
            &:hover {
                @apply text-primary;
            }
        }
    }
    h1,
    .h1 {
        font-size: 4rem;
        line-height: 2.4rem;
        @screen sm {
            font-size: 3rem;
            line-height: 3.6rem;
        }
    }
    h2,
    .h2 {
        font-size: 2.25rem;
        line-height: 2.9375rem;
    }
    h3,
    .h3 {
        font-size: 1.5rem;
        line-height: 1.8125rem;
    }
    h4,
    .h4 {
        font-size: 1.125rem;
        line-height: 1.625rem;
    }
    h5,
    .h5 {
        font-size: 1rem;
        line-height: 1.4375rem;
    }
    h6,
    .h6 {
        font-size: 0.875rem;
        line-height: 1.3125rem;
    }

    ul {
        li {
            @apply mb-4;
        }
    }

    .info {
        ul {
            li {
                @apply relative mb-4;
                padding-left: 25px;
                &:before {
                    @apply absolute left-0;
                    background-image: url("../assets/img/list.png");
                    background-repeat: no-repeat;
                    background-size: 50% 50%;
                    content: "";
                    height: 36px;
                    top: 3px;
                    width: 36px;
                }
                li {
                    &:first-child {
                        margin-top: 20px;
                    }
                }
            }
        }
        a {
            @apply underline;
        }
    }
}

p {
    @apply text-dark-3 mb-4 !important;
    hyphens: none;
    word-break: keep-all;
    word-wrap: normal;
}

a {
    @apply text-primary;
    @mixin fade;
    &:hover {
        @apply text-secondary;
    }
}

input[type="text"],
select,
textarea {
    @apply text-light-1 font-normal;
    border-radius: 9px;
    border: 1px solid theme(colors.primary);
    box-sizing: border-box;
    font-size: 14px;
    font-style: normal;
    line-height: 22px;
    padding-left: 10px !important;
    padding-right: 10px !important;
}
select {
    @apply appearance-none;
    /* Some browsers will not display the caret when using calc, so we put the fallback first */
    background: url("../assets/img/arrow-select.svg") #fff no-repeat 98.5% !important; /* !important used for overriding all other customisations */
    background: url("../assets/img/arrow-select.svg") #fff no-repeat calc(100% - 10px) !important; /* Better placement regardless of input width */
}
/*For IE*/
select::-ms-expand {
    @apply hidden;
}

iframe {
    @apply w-full;
}

/* Content Editor */

.info {
    a {
        @apply font-bold underline;
        &.btn {
            @apply no-underline;
            font-weight: inherit;
        }
    }
}

/* Base Image WordPress */

img.alignright {
    float: right;
    margin: 0 0 1em 1em;
}
img.alignleft {
    float: left;
    margin: 0 1em 1em 0;
}
img.aligncenter {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
a img.alignright {
    float: right;
    margin: 0 0 1em 1em;
}
a img.alignleft {
    float: left;
    margin: 0 1em 1em 0;
}
a img.aligncenter {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

input[type="text"],
select,
textarea {
    @apply appearance-none w-full text-dark-3 py-4;
    border-radius: 4px;
    border: 1px solid theme(colors.light-2);
    box-sizing: border-box;
    &:hover,
    &:focus {
        outline: 1px solid theme(colors.primary);
    }
}

blockquote {
    &:before {
        @apply text-center block font-playfair font-bold mb-2;
        content: "“";
        color: #c8c8e4;
        font-size: 96px;
        margin-top: 20px;
    }
    p {
        @apply text-center mb-4 text-dark-2 title--5;
        @screen md {
            @apply title--4;
        }
        @screen lg {
            @apply title--3;
        }
    }
}

/*content page*/
.content__page {
    iframe {
        border-radius: 10px;
        height: 450px;
        margin-bottom: 2rem;
        width: 100%;
    }
    h1,
    h2,
    h3,
    h4,
    h5 {
        @apply mt-8 text-dark-1;
    }
}

.breadcrumbs {
    @apply title--lead text-dark-1;
    span {
        @apply text-dark-1;
    }
}


  /* Header CSS */

  .header {
    @apply py-5 px-4;
    @screen md {
        @apply px-0;
    }
    &__nav {
        @apply hidden;
        @screen md {
            @apply flex;
        }
        ul {
            @apply flex items-center;
            li {
                @apply mr-6 mb-0;
                a {
                    @apply title--button text-primary relative;
                    padding: 0 0.7em;
                    &:hover {
                        @apply text-secondary;
                        &:before {
                            opacity: 1;
                            left: 0;
                            right: 0;
                        }
                    }
                    &:before {
                        position: absolute;
                        content: "";
                        -webkit-transition: all 0.35s ease;
                        transition: all 0.35s ease;
                        opacity: 0;
                        left: 15%;
                        right: 15%;
                        top: 0;
                        bottom: 0;
                        border-left: 3px solid theme(colors.primary);
                        border-right: 3px solid theme(colors.primary);
                    }
                }
                &.current-menu-item {
                    a {
                        @apply text-secondary;
                        &:before {
                            opacity: 1;
                            left: 0;
                            right: 0;
                        }
                    }
                    &.btn--contact {
                        background-color: rgba(113, 115, 206, 0.24);
                        a {
                            &:before {
                                @apply hidden;
                            }
                        }
                    }
                }
                &.btn--contact {
                    a {
                        background-color: rgba(162, 164, 241, 0.24);
                        border-radius: 4px;
                        padding: 11px 25px;
                        display: block;
                        &:hover {
                            background-color: rgba(113, 115, 206, 0.24);
                        }
                        &:hover {
                            &:before {
                                @apply hidden;
                            }
                        }
                    }
                }
            }
        }
    }
    &__home {
        @apply pb-0 pt-8;
        @mixin background-image;
        .header__nav {
            ul {
                li {
                    a {
                        @apply text-light-1;
                        &:hover {
                            @apply text-light-1;
                        }
                        &:before {
                            border-left: 3px solid theme(colors.light-1);
                            border-right: 3px solid theme(colors.light-1);
                        }
                    }
                }
            }
        }
        .menumobile {
            .line {
                background-color: theme(colors.light-1);
            }
        }
        .sitelogo {
            max-width: 249px;
        }
    }
    &__information {
        @apply flex justify-between items-center pt-16 flex-col;
        @screen lg {
            @apply flex-row;
        }
        &--title {
            @apply font-bold font-playfair text-light-1 title--3 text-center;
            max-width: 300px;
            margin-bottom: 41px;
            @screen md {
                @apply title--1;
                max-width: 582px;
            }
            @screen lg {
                @apply text-left;
                font-size: 55px;
                line-height: 70px;
            }
            @screen xl {
                font-size: 72px;
                line-height: 101px;
            }
        }
        &--img {
            @apply mb-0;
            max-width: 544px;
            @screen xl {
                max-width: 575px;
            }
        }
    }
}

.heroContent {
    @apply px-4;
    @mixin section-padding 40px, 40px;
    @screen md {
        @apply grid grid-cols-2 gap-x-12 items-center px-0;
    }
    @screen md {
        @mixin section-padding 40px, 80px;
    }
    @screen xl {
        @mixin section-padding 70px, 80px;
    }
    &__left {
        @mixin center-block 508px;
        @screen xl {
            @apply mx-0;
        }
    }
    &__right {
        margin-top: 38px;
        @screen md {
            margin-top: 0;
        }
    }
    &__title {
        @apply title--4 text-dark-1;
        @screen xl {
            @apply title--2;
        }
    }
    &__onlytitle {
        @apply flex flex-col items-center justify-center;
        #breadcrumbs {
            @apply mb-0;
        }
    }
}

.sitelogo {
    max-width: 207px;
}

.menumobile {
    .line {
        display: block;
        cursor: pointer;
        background-color: theme(colors.primary);
        width: 30px;
        height: 4px;
        margin: 4px auto;
        transition: all 0.3s ease-in-out;
    }
}

/* Mm Menu */

.mm {
    @apply bg-white text-primary;
    padding-top: 70px;
    &:before,
    &:after {
        opacity: 1;
    }
    &.mm--offcanvas {
        @apply title--5 text-primary;
    }

    ul.mm--open {
        @apply pt-10;
    }
    li {
        margin-bottom: calc(30px);
        &:after {
            @apply hidden;
        }
        &:before {
            display: block !important;
            right: 40px;
            left: auto;
            top: 10px;
        }
        a {
            @apply title--5 pt-0 pb-0 pl-10 text-primary;
            &:hover {
                @apply text-secondary;
            }
            &:after {
                @apply hidden !important;
            }
            i {
                @apply text-primary;
                padding-right: 10px;
            }
        }
    }
}

/* FPS Menu */

.fps-sticky-menu__logo {
    @apply block;
    order: 1;
    margin-right: 0;
    @screen lg {
        order: 0;
    }
}

.fps-sticky-menu__container-inner {
    min-height: 50px;
}

.fps-sticky-menu__nav {
    @apply mr-0 ml-auto;
    .menu {
        li {
            @apply mb-0 p-0 mr-6;
            &:last-child {
                @apply mr-0;
            }
            a {
                @apply title--button;
            }
            &.btn--contact {
                a {
                    @apply bg-secondary;
                    padding: 17px 53px;
                }
            }
        }
    }
}


/* footer */

.copyright {
    @apply mt-4 text-dark-3;
    font-size: 14px;
    @screen sm {
        font-size: 16px;
    }
    @screen md {
        @apply mt-8;
    }
    p {
        @apply mb-0;
    }
}

.footer {
    @apply px-4;
    border-top: 1px solid #e4e4f7;
    padding-top: 50px;
    padding-bottom: 40px;
    @screen md {
        @apply px-0;
    }
    &__copyright,
    &__menu {
        @apply mt-4;

        ul {
            @apply flex justify-center;
            @screen xl {
                @apply justify-end;
            }
            li {
                @apply mr-6 mb-0;
                &:last-child {
                    @apply mr-0;
                }
                a {
                    @apply title--button text-primary;
                    &:hover {
                        @apply text-secondary;
                    }
                }
            }
        }
    }
    &__copyright {
        @screen xl {
            margin-top: 40px;
        }
        ul {
            @apply flex-wrap;
            li {
                a {
                    @apply title--body text-dark-3;
                    font-size: 14px;
                    @screen sm {
                        font-size: 16px;
                    }
                    &:hover {
                        @apply text-dark-2;
                    }
                }
            }
        }
    }

    .sitelogo {
        @mixin center-block 207px;

        @screen xl {
            @apply mx-0;
        }
    }
}

</style>
