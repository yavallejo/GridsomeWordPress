<template>
  <Layout>
    <section class="heroContent container mx-auto py-16">
        <div class="heroContent__left">
            <figure>
                   <img :src="$page.wordPressPage.featuredMedia.sourceUrl" alt="">
            </figure>
        </div>
        <div class='heroContent__right'>
            <h1 class="heroContent__title" v-html="$page.wordPressPage.title"></h1>
            <div v-html="$page.wordPressPage.content"></div>
        </div>
    </section>
    <section class="about__bio info">
        <article class="container about__bio--box mx-auto">
            <div class="about__bio--top ">
                <figure class="about__bio--topLeft">
                    <img :src="$page.wordPressPage.acf.profileImageBio.sourceUrl" alt="">
                </figure>
                <div class="about__bio--topRight">
                    <div class="about__bio--topRightHeader">
                        <div>
                            <h3 class='title--4 title-md--3 text-secondary mb-0' v-html="$page.wordPressPage.acf.titleBio"></h3>
                            <span class=' text-primary' v-html="$page.wordPressPage.acf.yearsBio"></span>
                        </div>
                          <!-- Aqui faltan los iconos -->
                    </div>
                    <p v-html="$page.wordPressPage.acf.descriptionBio"></p>
                </div>
            </div>
            <div class="about__bio--bottom">
                <div class="about__bio--bottomLeft">
                    <h4 class='title--5 title-md--4 text-secondary' v-html="$page.wordPressPage.acf.informationBottomImage"></h4>
                  </div>
                  <div class="about__bio--bottomRight">
                    <p v-html="$page.wordPressPage.acf.descriptionBottom"></p>
                  </div>
            </div>
        </article>
    </section><!-- Al’s Bio -->
    <section class="about__informationSecondary">
        <article class='about__informationSecondary--box'>
            <h3 class="title--4 title-md--3 text-dark-1" v-html="$page.wordPressPage.acf.titleInformation"></h3>
            <p v-html="$page.wordPressPage.acf.descriptionInformation"></p>
        </article>
    </section><!-- Information Secondary -->
    <footer-custom></footer-custom>
</Layout>
</template>




<page-query>
query {
  wordPressPage(id: 122) {
    title
    content
    featuredMedia{
      sourceUrl
    }
    acf {
      titleBio
      yearsBio
      descriptionBio
      profileImageBio {
        id
        sourceUrl
      }
      informationBottomImage
      descriptionBottom
      titleInformation
      descriptionInformation
    }
  }
}
</page-query>

<script>

import FooterCustom from '~/components/FooterCustom.vue'

export default {
  components: {
    FooterCustom
 },
  metaInfo () {
      
    return {
      title: 'Hola'
    }
  }
}
</script>
<style>
.about {
    &__bio {
        @apply bg-light-1 px-4;
        padding-top:40px;
        padding-bottom:40px;
        @screen md {
            padding-top:90px;
            padding-bottom:90px;
        }
        &--box {
            @apply mx-auto;
        }
        &--top {
            @screen md {
                @apply grid grid-cols-12;
            }
            &Left {
                @mixin center-block 240px;
                margin-bottom: 24px;
                @screen md {
                    @apply col-start-1 col-end-5 max-w-full;
                }
            }
            &Right {
                @screen md {
                    @apply col-start-6 col-end-12;
                }
                &Header {
                    @apply text-center;
                    margin-bottom: 32px;
                    @screen md {
                        @apply flex justify-between  text-left;
                    }

                    .socialIcons {
                        @screen md {
                            margin-top: 20px;
                        }
                        @screen xl {
                            margin-top: 18px;
                        }
                    }
                }
            }
        }

        &--bottom {
            border-top: 1px solid theme(colors.light-2);
            padding-top: 48px;
            @screen md {
                @apply flex;
                margin-top: 64px;
            }
            &Left {
                max-width: 290px;
                @screen xl {
                    max-width: 380px;
                }
            }
            &Right {
                margin-top: 32px;
                @screen md {
                    margin-top: 0;
                    margin-left: 70px;
                }
                @screen xl {
                    margin-left: 97px;
                }
                &Items {
                    @apply text-dark-3;
                    padding-bottom: 9px;
                    @screen lg {
                        columns: 2;
                        column-gap: 60px;
                    }
                }
                &Secondary {
                    @apply text-dark-3;
                    border-top: 1px solid theme(colors.light-2);
                    padding-top: 24px;
                }
            }
        }
    }
    &__informationSecondary {
        @apply px-4;
        padding-top:40px;
        padding-bottom:40px;
        border-bottom: 1px solid theme(colors.light-2);
        @screen md {
            padding-top:90px;
            padding-bottom:90px;
        }
        @screen lg {
            @apply px-0;
        }
        &--box {
            @apply mx-auto;
            max-width: 751px;
           
        }
    }
}
</style>
