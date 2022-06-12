import { action, makeObservable, observable } from "mobx";

import DataStore from "./DataStore";

class ShopStore {
    constructor () {
        makeObservable(this, {
            shopAssortment: observable.deep,

            checkOwnerHistory: action,
            deleteUser: action,
            buyItem: action,
            generateRandomActivity: action,
            generateRandomUser: action,
            generateRandomOwnerHistory: action,
            getShopAssortmentFromLocal: action,
        })

        this.shopAssortment = this.getShopAssortmentFromLocal()
    }

    shopAssortment = []
    
    shopAssortmentInit = [
        {
            name: 'Retro Japan',
            cover: 'https://64.media.tumblr.com/8e3083b4dee931593dc1f119a02b7a4a/06a58066eb7bc19d-3b/s500x750/05569581f5e2a45117afff48979309f6aeb596a2.png',
            author: 'tomidoron',
            description: 'Очаровательные и задорные иллюстрации Томии Масако (@tomidoron) из Токио наполнены беззаботностью и весенней лёгкостью.',
            link: 'https://tomii-memo.tumblr.com/',
            collectionLink: 'retro-japan',
            content: [
                {
                    name: '月の間',
                    image: 'https://64.media.tumblr.com/1d5db42c0ac3d74b624a682f72c0878f/26c002ff26bee83f-bb/s500x750/1fba47326fc8a3515600df46e0b3ce7ee6a3b959.png',
                },

                {
                    name: '立葵の季節だ',
                    image: 'https://64.media.tumblr.com/4ea0adba753ec146bbabe38a10d95b72/5be9b11895674384-d6/s500x750/d7e89317382b06c6b338db4931c8c3f90722a502.png',
                },

                {
                    name: '梅',
                    image: 'https://64.media.tumblr.com/2c5cdc88c75bc75cdbe648ae17cc8a6c/0f00e62b9fb268a7-c7/s500x750/ee8b004d8e0d7e91554800d5725c073909f267e1.png',
                },

                {
                    name: '夜景',
                    image: 'https://64.media.tumblr.com/a69f614b1e3b9c96adf85390f33c6744/ae51b651fa8e0827-91/s500x750/6ee7eca1ecf1191187250008c96584ed5aa7248e.png',
                },

                {
                    name: '酷暑',
                    image: 'https://64.media.tumblr.com/de19750860e604393a9658c0d7a395ce/949b9eaf19549df6-20/s500x750/55001d86ed8dec2ada97b31411989fba0720eda1.png',
                },           

                {
                    name: '生花',
                    image: 'https://64.media.tumblr.com/d686ba007c1b4e1f8db8c158b84f10b7/0bce7b0e3fa8afb6-95/s500x750/30bda3cb69da4bdcfa19a9997c43ce678a7644cc.png',
                },

                {
                    name: 'tiger shock',
                    image: 'https://64.media.tumblr.com/464cac8d273248a5bacdf438e1aee2d6/8cf1e3d1c65f3364-5f/s500x750/4ac8bfb38c8a466e506a81cd123cf03a293e077d.png',
                },  

                {
                    name: '予知能力',
                    image: 'https://64.media.tumblr.com/6d35d16b2f8204e1ee40334abe204bf7/559d60dea11df672-a1/s500x750/9f58f90422b2842521df74a8a6496f7618eac432.png',
                },  
            ],
        },

        {
            name: 'Tales',
            cover: 'https://64.media.tumblr.com/f155e2524f45bcb2b6628a44e6e93410/tumblr_oszmfkIapE1va87k2o6_r1_500.jpg',
            author: 'Samuel Smith',
            description: 'Сказочный мир',
            link: 'https://www.artstation.com/samsamstudio',
            collectionLink: 'tales',
            content: [
                {
                    name: 'Witch Service',
                    image: 'https://64.media.tumblr.com/54c0889009beb326a14e0b789afe9754/tumblr_pifvbzqsCB1va87k2o1_500.jpg',
                },

                {
                    name: 'Guard On Post',
                    image: 'https://64.media.tumblr.com/c00c7b3e42ba55094ad35dff66f25854/7537762b3589048a-0c/s1280x1920/19c17661d3b06cd40e0e3aef7dd0cfe63e3b096a.jpg',
                },

                {
                    name: 'Goblins Trap',
                    image: 'https://64.media.tumblr.com/85481b7962535465097882e750edea10/9fe17574e4f4cd37-aa/s1280x1920/62523f33673972145bafa830a252d39387b4abbb.jpg',
                },

                {
                    name: 'Deus Ex Machine',
                    image: 'https://64.media.tumblr.com/6086d28cd7e8f61878d9b480241b8a03/tumblr_pdtxq4JEz91va87k2o1_500.jpg',
                },

                {
                    name: 'On The Edge',
                    image: 'https://64.media.tumblr.com/8d35c6776f38b08c3853a5b93e684408/tumblr_pdtxq4JEz91va87k2o2_500.jpg',
                },           

                {
                    name: 'Peace',
                    image: 'https://64.media.tumblr.com/f10db063656c0f4cc416af2c9276a5f1/495a9250abb0ae10-12/s500x750/f85b66b4cfef5f2baa3bb3ed2d151191f3571572.jpg',
                },

                {
                    name: 'Really?',
                    image: 'https://64.media.tumblr.com/ec60bc7a4a0b1ba2c51b0c64916f4644/9fe17574e4f4cd37-82/s1280x1920/59704eec31b2179809aa5ebca3efafe4fd652dcc.jpg',
                },

                {
                    name: 'Happy End',
                    image: 'https://64.media.tumblr.com/3cfc87487cf03757c49a57860de94b1b/9fe17574e4f4cd37-5f/s1280x1920/6e14189f7270a63009f5222c5af869f609824d05.jpg',
                },
            ],
        },

        
        {
            name: 'Fucca Folks',
            cover: 'https://64.media.tumblr.com/43707ecbf6a881d48c64022b2ba1edcb/4bb05a0b44c5298a-1b/s1280x1920/2e5a92a2a708190252db0dad4ba4c0ea1c4b2a19.jpg',
            author: "fucca",
            description: 'юность',
            link: 'https://fucca02.tumblr.com/',
            collectionLink: 'fucca-folks',
            content: [
                {
                    name: "Sleepwalker",
                    image: 'https://64.media.tumblr.com/807f51db21fa6a36f55035e6d4f904fa/ce36075c503b06dc-d9/s1280x1920/b77ca343c697154f7290ab47583fe8b37c2671e5.png',
                },

                {
                    name: 'Moon Phases',
                    image: 'https://64.media.tumblr.com/59ab65e988b3ca256647484c3b9aa4aa/f765669faa892af4-50/s1280x1920/573b6342a47e88b64ba28a8d403e27f9088f5a28.jpg',
                },
                
                
                {
                    name: 'Bonez',
                    image: 'https://64.media.tumblr.com/c9d9febffd4cb213399fe14a38cea887/eb7a354ab796f710-48/s1280x1920/834c26fb48735d2281acde85a3aadb9b4f1888f0.png',
                },

                {
                    name: 'Gambling',
                    image: 'https://64.media.tumblr.com/93a7d7b168566a52484cc7b4f8be9790/tumblr_pkucysSCfi1vq8vh1_1280.jpg',
                },

                {
                    name: "A fishbird?",
                    image: 'https://64.media.tumblr.com/54f288787c93d7e21dcf1c2adc74d09a/fd01f6695734b4c1-44/s1280x1920/b9c7eb2e1e3301ce58693e0e5753abad3b7930fa.png',
                },

                {
                    name: 'Friends Talk',
                    image: 'https://64.media.tumblr.com/e240c3407043d12e13ec12aa834391ee/5a145af02e8efd74-8d/s1280x1920/a974302e48a562182bafe056150acb9ba52690b8.png',
                },
                
                
                {
                    name: 'FLCL',
                    image: 'https://64.media.tumblr.com/ea49d7eda45eb3c9531fcd70da2b333d/bc0f98aa7a8b71a4-18/s1280x1920/85013d3f2bb8309e5eae5a6c4845e08b196e016e.png',
                },

                {
                    name: 'Chill',
                    image: 'https://64.media.tumblr.com/156bce5e3e9963c271831fd565557713/2ffa7c992b9805c5-b5/s1280x1920/8a6c048523058c013e68cbd13649fe15cbb7c546.png',
                },
            ],
        },

        {
            name: 'Pixel World',
            cover: 'https://64.media.tumblr.com/6373dd95c47c88f5e0570d4ff7490192/b8dfab74093270d7-e9/s500x750/860efc6cf6499e0d7d544cbcd4991c237ef62547.png',
            author: 'Jupiter Chiru',
            description: 'Чудесные пиксель арты Юпитер Чиру (@jrchair98) из России пропитанные ностальгией и умиротворением',
            link: 'https://jrchair98.tumblr.com/',
            collectionLink: 'pixel-world',
            content: [
                {
                    name: 'Пятница',
                    image: 'https://64.media.tumblr.com/bc4e06c76713e9139964ecbe17610543/157c386735d5d6b2-9f/s1280x1920/03fb610b4544cb9877f09d5e7707593f09574451.png',
                },

                {
                    name: 'The Day of Night',
                    image: 'https://64.media.tumblr.com/ba2ae164af758a9e3efaa85dc8081972/d868ef42b404a805-83/s500x750/2ca78d673b69a0e33d3513c74f4d1e37afcf1c8a.png',
                },

                {
                    name: 'Time of Joy',
                    image: 'https://64.media.tumblr.com/659a88140a9c21133d164355cf796d15/d8276bf51655c745-1d/s500x750/318931e963691618d609c408187f4b5d72a31c07.png',
                },

                {
                    name: 'Дорога',
                    image: 'https://64.media.tumblr.com/bc54edc7fa105f67c119963ac024ae9b/95e157e7921e1e17-a2/s500x750/e7a6bcff72555093167707ecd6cada7f423b8224.png',
                },

                {
                    name: 'ドダイトス',
                    image: 'https://64.media.tumblr.com/6be59a4b9780b41b7c6251106d26fe93/a12030d50cf18fc3-6c/s500x750/0accdfa6842e5fd0064ac1f6dd7594fd4137dca5.png',
                },           

                {
                    name: 'BOB',
                    image: 'https://64.media.tumblr.com/288c861dabd3407398c2ebf731a45e3d/f7745a0659e1c105-0d/s1280x1920/68227c355e4755420fb5473387b2993b5528ad92.png',
                },

                {
                    name: 'SL2021-01',
                    image: 'https://64.media.tumblr.com/c806268eaae8ac4f6d31e1871521e4dd/09d8e6801595c394-b2/s500x750/18f72c0b752ef3fe6f5db7cfb1dd7912074a49ff.png',
                },  

                {
                    name: '18NOV2020',
                    image: 'https://64.media.tumblr.com/0a8dffea0df99258918246bba93bfcde/9ad180e1a3bb5573-dd/s500x750/82034bf0c1153b8c4c8394d57a7432bba7c4d17e.png',
                },  
            ],
        },

        {
            name: 'Wizerds',
            cover: 'https://64.media.tumblr.com/4228179b33c25966003ef62608d0d54b/tumblr_ph7vi8M3Lh1uplehko1_1280.png',
            author: "Bruneburg's Art",
            description: "just wizerds",
            link: 'https://bruneburg.tumblr.com/',
            collectionLink: 'creatures',
            content: [
                {
                    name: 'old wizerd',
                    image: 'https://64.media.tumblr.com/a0d8f0991a36fadb22871a0109da5432/tumblr_pgdnx4hPJN1uplehko1_1280.png',
                },
                
                {
                    name: 'red wizerd',
                    image: 'https://64.media.tumblr.com/13a09a726f8af818fe837f2620504548/tumblr_pgdnx4hPJN1uplehko2_1280.png',
                },

                {
                    name: 'wizerd?',
                    image: 'https://64.media.tumblr.com/91f2e24600e88c3a9578d0fe658b1fe9/tumblr_pgdnx4hPJN1uplehko3_1280.png',
                },

                {
                    name: 'wizerd..',
                    image: 'https://64.media.tumblr.com/906402ffb695005784136d87772754ab/tumblr_pgdnx4hPJN1uplehko4_1280.png',
                },

                {
                    name: 'flame wizerd',
                    image: 'https://64.media.tumblr.com/de8f0c49a3084a26dd562d1858680222/e7a9bc7a4dce8379-ec/s500x750/d8365d8a53d415f5601171f7abc806ab63c84a77.png',
                },

                {
                    name: 'creature wizerd',
                    image: 'https://64.media.tumblr.com/fbd958908fbc88da16440032a2c0dec1/5694da9ccb6018e1-f9/s1280x1920/b0733bf78230e6547e6370c89225c1e090197a87.png',
                },

                {
                    name: 'not wizerd',
                    image: 'https://64.media.tumblr.com/b97bf22da4aed0668533ac0589833ecb/9ae193241995f8fe-ab/s1280x1920/f80e7fbb62f0544cff0574304a74763ae3746d50.png',
                },

                {
                    name: 'whos that',
                    image: 'https://64.media.tumblr.com/657dd4d31f10e5b87204b26050ecf71e/tumblr_plbe4s1aRm1uplehko1_1280.png',
                },
            ],
        },

        {
            name: 'Very ordinary beasts',
            cover: 'https://64.media.tumblr.com/fd31d01daf8aace63fe1f9a4bdd29c06/198801b5390f9fc2-71/s1280x1920/b66316c3e740510a341d79878ac621f81c35f978.jpg',
            author: 'Annie Stegg',
            description: 'Необычные существа художницы (@anniestegg).',
            link: 'https://anniestegg.com/',
            collectionLink: 'beasts',
            content: [
                {
                    name: 'Mermule',
                    image: 'https://64.media.tumblr.com/f680cca6443d0361f686b75be194bf4c/198801b5390f9fc2-84/s500x750/4b0765ca2badb4273d85a0f1ac62a05a02f98a17.jpg',
                },

                {
                    name: 'The Scowl',
                    image: 'https://64.media.tumblr.com/4718c2696fd74cb14132dd8364a84853/198801b5390f9fc2-2a/s1280x1920/5fd3eb27c6808a5ce37ef7db24d8f0a31cc3ce0a.jpg',
                },

                {
                    name: 'Autumn Song',
                    image: 'https://64.media.tumblr.com/07b839f2a5348d8cea29eff543510674/198801b5390f9fc2-6a/s500x750/0544fb169a596605518df0af8127550b591c464f.jpg',
                },

                {
                    name: 'The Rabbat',
                    image: 'https://64.media.tumblr.com/fd31d01daf8aace63fe1f9a4bdd29c06/198801b5390f9fc2-71/s500x750/6a171561be565123b1ae3db4b526dc6d4cd71457.jpg',
                },

                {
                    name: 'Crow',
                    image: 'https://64.media.tumblr.com/524dd1e2ad6d809354dce3c433da0075/198801b5390f9fc2-e7/s500x750/41615263a79f175cb56d7037a6b88bd9074ce76c.jpg',
                },           

                {
                    name: 'Two Headed Troublemaker',
                    image: 'https://64.media.tumblr.com/f662825ff46494ac496d3e5b9de99c4a/198801b5390f9fc2-5e/s500x750/9ed5761d94852a9ce77d7cf734b1504a9ff09b97.jpg',
                },

                {
                    name: 'Fox',
                    image: 'https://64.media.tumblr.com/a9616797fbffd31625c7104a4fe6f2b7/198801b5390f9fc2-ea/s500x750/ac80b9aca8ee8f3d637d72cd8bbc97bc8116b0e5.jpg',
                },  

                {
                    name: 'Moonlit Flight',
                    image: 'https://64.media.tumblr.com/6193c9b751dc8b2d7072af8b508c1792/198801b5390f9fc2-39/s500x750/66b7de29dcdef93e7e55135789c71eacc94de05e.jpg',
                },  
            ],
        },

        {
            name: 'creatures',
            cover: 'https://64.media.tumblr.com/1155441f386a83dc6c5a67ff80a21b21/tumblr_ppqsrxsfs31uplehko9_500.png',
            author: "Bruneburg's Art",
            description: "just creatures",
            link: 'https://bruneburg.tumblr.com/',
            collectionLink: 'creatures',
            content: [
                {
                    name: 'red-boi',
                    image: 'https://64.media.tumblr.com/1c2d160165bb52a5c1d385fce44f6948/tumblr_pfxsfa6nW71uplehko4_1280.png',
                },
                
                {
                    name: 'just-boi',
                    image: 'https://64.media.tumblr.com/7531fc38c284f3a2f81ea8d0273a0fab/tumblr_p83vccrwRX1uplehko3_500.png',
                },

                {
                    name: 'blue-boi',
                    image: 'https://64.media.tumblr.com/60455e7aa396b602b4ab0f1ff2d745e9/tumblr_pfxsfa6nW71uplehko3_1280.png',
                },

                {
                    name: 'night-boi',
                    image: 'https://64.media.tumblr.com/ca70aa6dc49d6844d3101f5e980a00d5/tumblr_pnakf0sLwh1uplehko1_1280.png',
                },

                {
                    name: 'green-boi',
                    image: 'https://64.media.tumblr.com/87296498a8629e7384f05e9a901cebe9/tumblr_pfxsfa6nW71uplehko2_1280.png',
                },

                {
                    name: 'silly-boi',
                    image: 'https://64.media.tumblr.com/46be9d652a9dee50d45a951b281f6d96/tumblr_p83vccrwRX1uplehko2_500.png',
                },

                {
                    name: 'dark-boi',
                    image: 'https://64.media.tumblr.com/ccac9e49d09d916bce864ad03405bba7/tumblr_pfxsfa6nW71uplehko1_1280.png',
                },

                {
                    name: 'happy-boi',
                    image: 'https://64.media.tumblr.com/c50f3f9c2267252a32fa3baa04e072a2/tumblr_p83vccrwRX1uplehko1_500.png',
                },
            ],
        },

        {
            name: 'Абстракция', 
            cover: 'https://64.media.tumblr.com/357d0da0197df5825e89ff21cd6c309e/7184064e8802666c-b2/s640x960/bc4ec94bda76e86d557633099edbad39605a7960.jpg',
            author: 'ABSTRACT EYE',
            description: 'Необычные существа художницы (@anniestegg).',
            link: 'https://abstract-eye.tumblr.com/',
            collectionLink: 'abstraction',
            content: [
                {
                    name: 'Flashlights',
                    image: 'https://64.media.tumblr.com/72570c846986a25699f3e6d720c6dd0d/9c88238f1b270084-b1/s640x960/1aaa4baacf8a3174cb975016cd07d4930325c056.jpg'
                },

                {
                    name: 'Smears',
                    image: 'https://64.media.tumblr.com/5de78313422631fccf201a6b0f16e38a/bdc026386b652f20-5e/s640x960/4b297e7d4a5ba0e51e33d20786e2b1eef9f5e4b1.jpg',
                },

                {
                    name: 'Bottleneck',
                    image: 'https://64.media.tumblr.com/db78104f21c8548764f723698c964845/8d6b5378a24c95c4-d1/s640x960/f8707db5196b4eeffa7a698f32e0ec4c3df9ef42.jpg',
                },

                {
                    name: 'Big City Life',
                    image: 'https://64.media.tumblr.com/055448db6832645137da5a86adc1cac2/b6bf1ac87036d3ef-b8/s1280x1920/944fd7ecfa6a2a3d98d5cb65c6417162d49dafd1.jpg',
                },

                {
                    name: 'Like a fish',
                    image: 'https://64.media.tumblr.com/dfe2e8954922df87cdf87a14bd8f9850/1e877fcf4a2af25f-5e/s640x960/bfd0909e8eb4d73e00b367f9cd6a0588f716cac4.jpg',
                },           

                {
                    name: "You're my playground",
                    image: 'https://64.media.tumblr.com/e4db49d1de50cc3612a2b4cbeaf648fc/b5a6ea0d8ffe8f40-33/s640x960/797a114120fb3690e63883adf88dcfeeb140ad02.jpg',
                },

                {
                    name: 'Metal Turtles',
                    image: 'https://64.media.tumblr.com/1d95b2f546ad38d28f1a48583d934cdc/69b5d3f2448c4a17-60/s640x960/fe965092411433c232e4de7bb36acf1822163096.jpg',
                },  

                {
                    name: 'her',
                    image: 'https://64.media.tumblr.com/4437dbb15f7b1b7d6e95b9576bc1f08f/974201443adbbe7d-9a/s640x960/e73da4db9596fdbc0677e9ffd7213711eb435533.jpg',
                },  
            ],
        },

        {
            name: "Hannah's art", 
            cover: 'https://64.media.tumblr.com/b5717180e543c17766739b7bcf3793a8/1a29b80b239d5324-26/s2048x3072/6052f01336043ce644a20c967b8c0b842da63a51.jpg',
            author: 'Hannah Lock Illustration',
            description: 'Микс работ Hannah Lock Illustration',
            link: 'https://hannahlockillustration.tumblr.com/',
            collectionLink: 'hannahs-art',
            content: [
                {
                    name: 'A Garden',
                    image: 'https://64.media.tumblr.com/bb88dbcab223ba7866661d8786bbb246/59ee1b05014acdc0-92/s500x750/e4b8e4d26bba84778cb8ba55edcfc258bc14962b.jpg'
                },

                {
                    name: 'Sacred Heart',
                    image: 'https://64.media.tumblr.com/1da4a6c23708dcb6af249a8fe1829e15/a47ccbcde7a79408-f1/s500x750/5a177c81a7137f122e2f855f36a6787a149f2d98.jpg',
                },

                {
                    name: "Your Lover's Eyes",
                    image: 'https://64.media.tumblr.com/cb78970909d393adb00fb293594835b1/a1dfeab77a4a0b4c-94/s500x750/0254e86fdd8e88c27ae70fd119410693b520b263.jpg',
                },

                {
                    name: 'Heron',
                    image: 'https://64.media.tumblr.com/e1d433eaa8eb93051fbb424813bcefce/b1140907f33e3da2-8b/s500x750/ea8a525d7150a9a19e217ce7f5c5a7dccc5ec549.jpg',
                },

                {
                    name: 'Stressy',
                    image: 'https://64.media.tumblr.com/0a35442259bbc4ea65f3bcdc1ce8e58f/bbc3ce3297d38321-75/s500x750/27271ddaad5d9966622813afb17c11566f72b076.jpg',
                },           

                {
                    name: "Melting",
                    image: 'https://64.media.tumblr.com/12d18f677d95789932a040849897a4fa/ccc983c4aeffbd73-b9/s500x750/b47fd75231a625d896d71a9e223d8e7d2e6a71cc.jpg',
                },

                {
                    name: "Don't Pat the Frog!",
                    image: 'https://64.media.tumblr.com/922742aa83a37a0c075726ddb75eb8bf/5b3efed53947c31e-58/s500x750/3dc475e9d3b37cc952109836f30a756a822fde80.jpg',
                },  

                {
                    name: 'Seer',
                    image: 'https://64.media.tumblr.com/f4ee03caae41039b350c6b007d9213d0/240e114e681bc4bc-17/s500x750/8b75bf38c083cbe1b1c59423abcdede36b4f9f61.jpg',
                },  
            ],
        },

        {
            name: 'Мышка',
            cover: 'https://64.media.tumblr.com/e27f7a509049887d6ea48313a041ca77/83dd5f3294f9f5f2-30/s500x750/daafa6048f6b77189154b5c5b6a5ec58d3195f95.png',
            author: "Ocean's Bazaar",
            description: 'Мыши',
            link: 'https://oceantoyz.tumblr.com/',
            collectionLink: 'mouse',
            content: [
                {
                    name: 'Freshness',
                    image: 'https://64.media.tumblr.com/6d1605e9f4980e4ad378911028163a60/0efc12005946a9fe-53/s400x600/27a2c0f2dd2c29fa92177d47489dfb9f056f7f43.png',
                },

                {
                    name: 'Hi, Kitty',
                    image: 'https://64.media.tumblr.com/da083ed55fc0a4559e70475baf5db073/b98e0a0ae72654b2-11/s500x750/5b8fdd446b89e46585ae5469b53f9d356ab1cd4c.png',
                },

                {
                    name: 'Vacation',
                    image: 'https://64.media.tumblr.com/b09df3072acde1fd89e2b2bfb593d1e6/e9d6d9292d383962-87/s500x750/b7a642e66567cf90941265a956544fbd8d2c40b1.png',
                },           

                {
                    name: 'Just Smile',
                    image: 'https://64.media.tumblr.com/0587a53adcb1daed6742f3782fe6ea93/17d5a9faa234d20e-b8/s540x810/fdb40caab39fbe9ccedf489641ca6ac476b14ab3.png',
                },
            ],
        },

        {
            name: 'o-bois',
            cover: 'https://64.media.tumblr.com/26fb3cf89eb7b936cca983e93c8fef3e/fb61cf0abf227f63-22/s1280x1920/aec29f18ac81f3b5dddfcf06d0d987f85231a8ce.png',
            author: "Bruneburg's Art",
            description: "fruits",
            link: 'https://bruneburg.tumblr.com/',
            collectionLink: 'o-bois',
            content: [
                {
                    name: 'rnage',
                    image: 'https://64.media.tumblr.com/e63dc756585b3a30903499153f3da5e1/fb61cf0abf227f63-d5/s1280x1920/096d1c8edc8809a84992f48069b1abebf6c3d8be.png',
                },

                {
                    name: 'ornangenes',
                    image: 'https://64.media.tumblr.com/ff82d02f4f40a1acfc14dd94e226ead0/fb61cf0abf227f63-90/s1280x1920/c85116dff65a1faa9c267a83fe657358c62d639b.png',
                },

                {
                    name: 'rngsies',
                    image: 'https://64.media.tumblr.com/a5bb837ab0d14aee06715852d1a4bbc6/fb61cf0abf227f63-23/s1280x1920/153e8bb44167758bdfc43964b504ad9b8b44b8ac.png',
                },
            ],
        },

        {
            name: 'Лица',
            cover: 'https://64.media.tumblr.com/2a43c79cc7fd07fc169791d849aa9f8a/tumblr_o4t4cclBjL1qh991go1_500.jpg',
            author: "Alexander Wilson",
            description: 'Все мы разные',
            link: 'https://alexinatree.tumblr.com/',
            collectionLink: 'faces',
            content: [
                {
                    name: 'Умиротворение',
                    image: 'https://64.media.tumblr.com/cff7dff2c2c5b35e566644657668960f/ec5e2ac1d64b7bb1-42/s500x750/4a6cf7d0949bbe3d15d472822eec04bd2a446256.jpg',
                },

                {
                    name: 'Раздумья',
                    image: 'https://64.media.tumblr.com/44a07c4bcd14133138787c0e4442590c/ec5e2ac1d64b7bb1-67/s250x400/4d0d828d6059811698eadbfe222b73d3005a2752.jpg',
                },

                {
                    name: 'Печаль',
                    image: 'https://64.media.tumblr.com/fb744ac1772fb5fea75b9f0090288166/ec5e2ac1d64b7bb1-43/s250x400/6e878ca3af437532711d73873b85d1d6f727849f.jpg',
                },           

                {
                    name: 'Принятие',
                    image: 'https://64.media.tumblr.com/c859f1cab75f4654808bb8f1cce41158/ec5e2ac1d64b7bb1-99/s250x400/f1aa1a77bc882430a27b0675d66ba464d2c85188.jpg',
                },

                {
                    name: 'Надменность',
                    image: 'https://64.media.tumblr.com/9b28c4b051ef71d845bcc21a17896aca/ec5e2ac1d64b7bb1-ef/s250x400/454984a827d8a40c891246f268f248c5dcc564db.jpg',
                },

                {
                    name: 'Неприязнь',
                    image: 'https://64.media.tumblr.com/f5c795d709918013e605fa63602935ee/ec5e2ac1d64b7bb1-6f/s250x400/6f677fb86b1309c803e8e2cd1ef109faf11848d7.jpg',
                },           

                {
                    name: 'Сожаления',
                    image: 'https://64.media.tumblr.com/6febfbde9473ac09d8f6ca3d3500b7de/ec5e2ac1d64b7bb1-4f/s250x400/13069d17c2095318a17d118cd65b77dc6dc48027.jpg',
                },

                {
                    name: 'а?',
                    image: 'https://64.media.tumblr.com/a04a037d16f8cd286635d7fad41e4c67/ec5e2ac1d64b7bb1-05/s500x750/ec62bca1cec9f94d60a8b4442bc562246ea1132e.jpg',
                },
            ],
        },

        {
            name: 'them',
            cover: 'https://64.media.tumblr.com/7fdea31d816127fbc96bef206b5a7646/9b76742866f0e21e-a9/s500x750/6ecb256015db07f7a6e40bf7973dc49e4b4677f4.png',
            author: "Baba Ghannouj",
            description: 'Космические твари и чем они увлекаются',
            link: 'https://raymodule.tumblr.com/',
            collectionLink: 'them',
            content: [
                {
                    name: 'lizard at work',
                    image: 'https://64.media.tumblr.com/b0069e80d8be656b43b70e8c9bc88feb/faf6fa7dde2945fa-23/s500x750/c61d02f9cd4cac0ab30cc0a823d0df7b6ee597f5.png',
                },  

                {
                    name: 'a small technician cat',
                    image: 'https://64.media.tumblr.com/d0fbf3517bca88197f71cc29bad70657/78ab2039ac31fe06-7e/s500x750/666ef8cc09cfc24419114e65bc8a058f06ee0c5a.png',
                },

                {
                    name: 'Raoccoön & bro',
                    image: 'https://64.media.tumblr.com/cdff2c45163597b4086dee4fd0e8539d/9c719c67d3adcc1d-4f/s500x750/07640114a9e0078e52ea4a3c74969421cf3428f7.png',
                },
                
                
                {
                    name: 'the sheep guy',
                    image: 'https://64.media.tumblr.com/759b5413950ca103d930d15546f02b06/ddccb42f55ade8ab-13/s500x750/b86bccd25fe975631ad2f9b92be7accd26b4bdae.png',
                },

                {
                    name: 'raccoon lady',
                    image: 'https://64.media.tumblr.com/c236ddb6cd03e6b86485fd591b6738f6/1c1d6bcf3696ce7c-78/s500x750/1d87f68c053e55bbef2e88d8448973187e42d1eb.png',
                },

                {
                    name: 'scientist lizard 2',
                    image: 'https://64.media.tumblr.com/2f7a0aff86ee58517430e14a9fbdcdca/79d49bb769f31129-7f/s500x750/f92ac5095aa59f748ea1145c3503fdca7e8ff211.png',
                },

                {
                    name: 'raccoon lady 2',
                    image: 'https://64.media.tumblr.com/530d9e4771a189cecdc5e81e0040c787/1c1d6bcf3696ce7c-52/s500x750/daf1dc59b3d362ab88d23536898b4109de94a63b.png',
                },           

                {
                    name: 'at piano',
                    image: 'https://64.media.tumblr.com/8b6c38ee9953bc9d46cbd41ea90e6019/ddccb42f55ade8ab-79/s500x750/0471da2d484a6a46c97dd5e40a114b41105b1e15.png',
                },
            ],
        },
                

        {
            name: 'Лиминальность',
            cover: 'https://64.media.tumblr.com/7b4fcec14fe2cf84d89c2a19ffceafc5/3e0292d5bd45d187-10/s1280x1920/56f8fe5901a9bc756b127ef34e6ff4c636c9c203.jpg',
            author: 'Night Corporation',
            description: 'Лиминальность - физиологический, неврологический или метафизический термин, обозначающий «пороговое» или переходное состояние между двумя стадиями развития человека или сообщества.',
            link: 'https://nightcorp.tumblr.com/',
            collectionLink: 'liminality',
            content: [
                {
                    name: 'F',
                    image: 'https://64.media.tumblr.com/772a56015fb1aa6e4bddce2b360b8e4f/ec03652716323690-0c/s1280x1920/96416e83ef6aaa837debde43ef2209233bc216bc.jpg',
                },

                {
                    name: 'I',
                    image: 'https://64.media.tumblr.com/9792d8140d5edb172d175996e76e948d/5d3e3cda90256a9d-9f/s500x750/2f5c00a012d419ab4ebc10a94a15b312b629c8d3.jpg',
                },

                {
                    name: 'G',
                    image: 'https://64.media.tumblr.com/e25be6df48409021ec9e56c2e85ec7ad/d53724c7d4a5522b-be/s1280x1920/d1ad913291612cc8efe42970e84c34b826a70d9d.jpg',
                },

                {
                    name: 'H',
                    image: 'https://64.media.tumblr.com/9e5f012bd193c0e8edd455ab77085121/9dd5673f483c3d45-d5/s1280x1920/fc8a1cc6983f773e9ac93d95d415755ea48ea46f.jpg',
                },

                {
                    name: 'T',
                    image: 'https://64.media.tumblr.com/f31ef3fd45146f341b1f9ecec63b3fc4/3249db7718db1db9-36/s1280x1920/44abcb35281e2b9fa92ffa4da5984285ff62bfb9.jpg',
                },           

                {
                    name: '/F',
                    image: 'https://64.media.tumblr.com/858efe6359f88b7f08030dc9d7bb54b9/8a5fbfd418264f4e-e2/s500x750/3ea22bb252d9c29cc81844d56b8268de9a882783.jpg',
                }, 

                {
                    name: 'O',
                    image: 'https://64.media.tumblr.com/70b7bd27c28c2462e462b632174c289e/b40d1aeed9633a36-b1/s1280x1920/0ab436e799f9b180fac4d338e7c178974adcb16f.jpg',
                },    
                {
                    name: 'R',
                    image: 'https://64.media.tumblr.com/7e4f99c1f262e8d6622b7583759ba5d8/f31c1dd8fc42985f-60/s1280x1920/4b55cb4078c43d99ad6eda314d323e402b89623e.jpg',
                },    
            ],
        },

        
        {
            name: 'Примитивно-нетривиальный мир',
            cover: 'https://64.media.tumblr.com/3e6d2c106e4734f52d1d6be322bbea74/dbd415f29c4daeb0-5f/s1280x1920/9a76fa553e066b048d86e89fedf4bf2c4b28ef48.jpg',
            author: "mizuno",
            description: '?',
            link: 'https://orihhiro.tumblr.com/',
            collectionLink: 'primitive-japan',
            content: [
                {
                    name: "blue flamingo",
                    image: 'https://64.media.tumblr.com/d82ae8d54b2879e20eb64f988e5042da/2bc1a5a3b9e714bb-23/s1280x1920/92ad0aa33273f0506ed9e680a0f016df50fd79d6.jpg',
                },

                {
                    name: 'yellow zoo',
                    image: 'https://64.media.tumblr.com/e1eb0c7a1724f19eba6b0a4a3c505cbb/b6774233d366f411-04/s1280x1920/ff91123cca06bb4558a2857225b4deca8d260845.jpg',
                },
                
                
                {
                    name: 'milk coke',
                    image: 'https://64.media.tumblr.com/29639cb08ef65b8edf8b84974ab9fe35/bb6ae6edb5000d5a-56/s1280x1920/12958e5147aeb375fe1694e6c2750c63df4fbd99.jpg',
                },

                {
                    name: 'backpack',
                    image: 'https://64.media.tumblr.com/5cf0f6afa22d1932c278ba71e6c7df78/bb6ae6edb5000d5a-c2/s1280x1920/94b3c3ee64da1252d06901709b39f78d57609b5d.jpg',
                },

                {
                    name: "lovely rabbit",
                    image: 'https://64.media.tumblr.com/988012cf00d4f35b884b782516c3996d/3234fa30ffb32508-04/s1280x1920/7a138a85f9ec4e4072d098119f8e06f6bd0b655a.jpg',
                },

                {
                    name: 'sleepy bear',
                    image: 'https://64.media.tumblr.com/4250378c2a3652b6d1d23b66c64d347d/3234fa30ffb32508-b3/s1280x1920/0cc7eb3d326b7e5f72e91cecaeb20ae3725ca372.jpg',
                },
                
                
                {
                    name: 'grape juice',
                    image: 'https://64.media.tumblr.com/77ce938d1bc566342283df98fb80b643/6f3bbad54b2da191-3a/s1280x1920/685e3105200ba556591f9d53dbac459ca104b0b9.jpg',
                },

                {
                    name: 'giraphe store',
                    image: 'https://64.media.tumblr.com/a69724495de04a3b10ce5a3e37cd1551/7909dbde25b31418-a9/s1280x1920/2b7371241aee00200a043c09292e274a77d78c48.jpg',
                },
            ],
        },

        {
            name: 'Ностальгия',
            cover: 'https://64.media.tumblr.com/57f20140d7257892646429320fd2a011/2c91803c31aaa311-8e/s540x810/28650bc7bdb72ee8c06905a88c9e333bed3c3a64.png',
            author: 'Old Windows Icons',
            description: '32x32 иконки из 90-х и ранних 00-х. Eсть иконки программ, игр и системых приложений Windows.',
            link: 'https://oldwindowsicons.tumblr.com/',
            collectionLink: 'nostalgia',
            content: [
                {
                    name: 'Horror Channel theme - My Documents',
                    image: 'https://64.media.tumblr.com/9e17e8c8e5221d4c07e0972a5e9acf19/d3597a60eb1c47b9-6f/s540x810/b4825c6fa8fa718ccc0e2c55af3513b03a3e19eb.png',
                },

                {
                    name: 'Adobe Photoshop 6.0',
                    image: 'https://64.media.tumblr.com/292a2f1e514357cb9b5ab7f15c3fc697/a60bb94fc1230ff1-75/s540x810/f07bc2d701092456dc75501409cb7708645d215a.png',
                },

                {
                    name: 'The Sims 2: Nightlife',
                    image: 'https://64.media.tumblr.com/8d9a8b62713c569fe73fc08dc8226efa/b06ddbdfb289257d-3d/s540x810/fb182137fe11c1756f74c54d9c25283397dd1d46.png',
                },

                {
                    name: 'spy.exe',
                    image: 'https://64.media.tumblr.com/342333d1f5c857936c257d367ef3fed9/bf091ff86c766c79-5a/s540x810/e0a71ceac74f1efbeddef59e309b5809dfbbe55f.png',
                },

                {
                    name: 'Hitman: Contracts',
                    image: 'https://64.media.tumblr.com/a227a1d3532d6551956d05df59bb752f/985e500192c5e2a1-7a/s540x810/02f334a5dd7a49f8c57311162eed8200c1d0c09f.png',
                },           

                {
                    name: 'Microsoft Fine Artist',
                    image: 'https://64.media.tumblr.com/f9547dc51dd9eff54aaca75cf0361b84/abff5d01b0402273-4d/s540x810/f21913a0e6ec26b180a39cf646bf5e0d0fcf549e.png',
                },

                {
                    name: 'Hearts Hunter',
                    image: 'https://64.media.tumblr.com/c8fdaeb049e6861b075310513c05015a/1dd6db0004a87b2d-d7/s1280x1920/1557844ce2fe395fb4e83167c98a6733336d2c00.png',
                },

                {
                    name: 'Windows XP',
                    image: 'https://64.media.tumblr.com/2ee1c5c02d4ac4d55d33fdcf258abb65/7e19242d04ca3ba4-8d/s1280x1920/474d6613704dbe24a825eac99892e80b05f1ece5.png',
                },
            ],
        },

        {
            name: 'Maysketchaday',
            cover: 'https://64.media.tumblr.com/53e14d50dec41f32942fd3ae103434d8/7826de527ab4ea3d-18/s500x750/87153469c68a02d81cf2cb3ba068b48842147301.jpg',
            author: "Tomas Osang Muir",
            description: 'Необычное видение мира глазами Томаса',
            link: 'https://www.artstation.com/parkurtommo',
            collectionLink: 'maysketchaday',
            content: [
                {
                    name: 'Night Sky',
                    image: 'https://64.media.tumblr.com/1a11a4f686e5f32de05e0c9b3046af52/7826de527ab4ea3d-8d/s500x750/0d2abe72695bc657246ac2c52f8e1f6a2ac9f425.jpg',
                },

                {
                    name: 'Expedition',
                    image: 'https://64.media.tumblr.com/aea7216e6030d368436038c6e1cef3e4/7826de527ab4ea3d-01/s500x750/8e44e69d14ea2442b691c47f65dd9b9ce191e587.jpg',
                },
                
                
                {
                    name: 'Beach',
                    image: 'https://64.media.tumblr.com/7441ce1cdf5952f8488688485b03aec8/7826de527ab4ea3d-bc/s500x750/beb7ede167e3a09c92d9789df0f8a735d6be7f7f.jpg',
                },

                {
                    name: 'Honor & Magic',
                    image: 'https://64.media.tumblr.com/d107b41bdf699683887de3036f3feeee/7826de527ab4ea3d-76/s500x750/c947a033d70af4cd37ee390b47a26a4b45214322.jpg',
                },
            ],
        },

        {
            name: 'From the 70s',
            cover: 'https://64.media.tumblr.com/fc3663c3c5f8a65db3d8b843ff925c34/tumblr_nj4ujwzGVL1qztcdbo1_1280.jpg',
            author: "70s Sci-Fi Art",
            description: 'О чем мечтали наши отцы',
            link: 'https://70sscifiart.tumblr.com/',
            collectionLink: 'from-the-70s',
            content: [
                {
                    name: "Parallel Worlds",
                    image: 'https://64.media.tumblr.com/d82e66f9c95209b1357a3c07662c2856/474a2810c4943d29-1a/s1280x1920/d1da03dc64030e18c0a948d5822017b38d91477e.jpg',
                },

                {
                    name: '10:81',
                    image: 'https://64.media.tumblr.com/a3801733b4ec7b285987d88140973fc1/fdd1cd4c99b5fbaa-bb/s1280x1920/3003d7cc5449d7f6a3c0f1b66c84d4d6ae14e579.jpg',
                },
                
                
                {
                    name: 'Orchestra 2772',
                    image: 'https://64.media.tumblr.com/9555dda69ec143fc061bb1a7d1b25b94/e3aff4c0489a8f55-8f/s1280x1920/e0e498a39a1b03e36c83d3f3813e1852730bf12a.jpg',
                },

                {
                    name: 'Gyroscopically Stabilized Car',
                    image: 'https://64.media.tumblr.com/f627ce9b0f50cd69ad208c2e8902e2b9/e3dda2f2a07e611e-f6/s1280x1920/ab24f504e293149c0fb30584ed7bf75cd7cac175.jpg',
                },

                {
                    name: "Richard Bizley",
                    image: 'https://64.media.tumblr.com/0d05ca49d15cb6108d6900a9d7c50eec/a8d7fc696d5e0a55-24/s1280x1920/18dbfdbd23ef393624eebcfb0d73679017c74935.jpg',
                },

                {
                    name: 'Tales of the Cthulhu Mythos',
                    image: 'https://64.media.tumblr.com/b238f6c70a8bd8335019f4aadfa7d3ad/352a26086747704a-9e/s1280x1920/1fbe10239c07e61080cae22266fcd08da77db2af.jpg',
                },
                
                
                {
                    name: 'The Weapon Shops of Isher',
                    image: 'https://64.media.tumblr.com/2892938b1d8439eab4181d6cc7b78fe8/a5896e7cdabb6f90-96/s1280x1920/e97a0001fcfc1b91035edeaf98e66c9322565dcd.jpg',
                },

                {
                    name: 'Chris Foss',
                    image: 'https://64.media.tumblr.com/5c4e2c11ab40405e5300ce0f5d3455fa/a75de3b9d4833fb1-2e/s1280x1920/795e6f39fc358b27e7aad0e9bf6d9677eea02b90.jpg',
                },
            ],
        },


        {
            name: 'liitle astronaut',
            cover: 'https://64.media.tumblr.com/f452ad9a7423ac83453c28cb9c6b7082/580ddc3409a8262e-44/s1280x1920/b28cea2a68cbaa38f93ef98c691a9429a7a3d0fb.jpg',
            author: "kazunoko",
            description: 'О чем мечтали наши отцы',
            link: 'https://opensea.io/collection/kazunoko',
            collectionLink: 'astronaut',
            content: [
                {
                    name: "washing",
                    image: 'https://64.media.tumblr.com/95f3bd86c08dd70110a2d8cf0382cd42/580ddc3409a8262e-3c/s1280x1920/43ee72bbdfa73c870030f51e9a2819f7511d1374.jpg',
                },

                {
                    name: 'cleaning',
                    image: 'https://64.media.tumblr.com/1bcf29cc7e228c19587c9d130653dc21/580ddc3409a8262e-33/s1280x1920/bb997f96b467d05b952c9da7ebff4da7dfbc7c2a.jpg',
                },
                
                
                {
                    name: 'helping',
                    image: 'https://64.media.tumblr.com/462001105efc565a5291940ae4c26beb/580ddc3409a8262e-9a/s1280x1920/a26e18f788874fee2a424c132f29af4655baa064.jpg',
                },

                {
                    name: 'starring',
                    image: 'https://64.media.tumblr.com/02c12cf3ecbc8e1b6ae7cc8aab36b06d/580ddc3409a8262e-6f/s1280x1920/0f1333c0cf95d8fbb2921baa7bacc49b10b831fd.jpg',
                },

                {
                    name: "walking",
                    image: 'https://64.media.tumblr.com/3f86653b65e607a8218968e5d621ed6d/580ddc3409a8262e-76/s1280x1920/da7d27a1079f2b0dacf2f75556c9d282f0773f4c.jpg',
                },

                {
                    name: 'eating',
                    image: 'https://64.media.tumblr.com/deee344058a48169e5df445a3cbad6a9/580ddc3409a8262e-11/s1280x1920/00ce70e8fca127fb8d346042497115d68ef8c35d.jpg',
                },
                
                
                {
                    name: 'cooking',
                    image: 'https://64.media.tumblr.com/4848147d64bbe92c1b861b12687dfb8c/580ddc3409a8262e-a5/s1280x1920/4c73a330041bf6ef1c884a26466e934c7b783ac4.jpg',
                },

                {
                    name: 'chilling',
                    image: 'https://64.media.tumblr.com/5d9bdc152df9fa420fcd585845e37e73/580ddc3409a8262e-2a/s1280x1920/cdd795318651d021fd126b6c50e7aa35057f4868.jpg',
                },
            ],
        },

    ]

    checkOwnerHistory = (tempOwnerHistory) => {
        let newOwnerHistory = tempOwnerHistory

        if (tempOwnerHistory.length === 6) {
            newOwnerHistory.pop()
            return [...newOwnerHistory]
        } else {
            return [...tempOwnerHistory]
        }
    }

    deleteUser = () => {
        this.shopAssortment = this.shopAssortment.map(collection => {
            return {
                ...collection,
                content: collection.content.map(item => {
                    const randomUser = this.generateRandomUser(1, 999, DataStore.loggedUser.id, DataStore.deletedUsers)
                    if (DataStore.deletedUsers.includes(item.owner)) {
                        return {
                                ...item, 
                                owner: randomUser,
                                price: item.price + Math.floor(Math.random() * (item.price / 4)),
                                ownerHistory: [
                                    {
                                        id: randomUser,
                                        price: item.price
                                    },
                                    ...this.checkOwnerHistory(item.ownerHistory)
                                    ]
                        }
                    } else {
                        return item
                    }
                })
            }
        })

        
        localStorage.setItem('shopStore', JSON.stringify(this.shopAssortment))
    }

    buyItem = (itemCollectionId, itemId, buyerId) => {
        const item = this.shopAssortment[itemCollectionId].content[itemId]

        this.shopAssortment[itemCollectionId].content[itemId] = {
            ...item, 
            owner: buyerId,
            price: item.price + Math.floor(Math.random() * (item.price / 4)),
            ownerHistory: [
                {
                    id: buyerId,
                    price: item.price
                },
                ...this.checkOwnerHistory(item.ownerHistory)
                ]
        }

        localStorage.setItem('shopStore', JSON.stringify(this.shopAssortment))
    }

    generateRandomActivity = () => {
        return this.shopAssortmentInit.map( (collection, collectionIndex) => {
            return {
                    c_id: collectionIndex,
                    ...collection,
                    content: collection.content.map((item, itemIndex) => {
                            const finalPrice = Math.floor(Math.random() * 2000)
                            const finalOwner = Math.floor(Math.random() * DataStore.usersFromLocal.length)
                            return {
                                    c_id: collectionIndex,
                                    i_id: itemIndex,
                                    ...item,
                                    price: finalPrice,
                                    owner: finalOwner,
                                    ownerHistory: this.generateRandomOwnerHistory(finalPrice, finalOwner)
                                    }
                        })
                    }
        })
    }

    generateRandomUser = (tempHistory, prevUserId, finalOwner, arrayWithUsers) => {
        let newUser = Math.floor(Math.random() * DataStore.usersFromLocal.length)

        if (tempHistory === 0 || newUser === finalOwner) {
            while (newUser === finalOwner) {
                newUser = Math.floor(Math.random() * DataStore.usersFromLocal.length)
            }

        } else if (newUser === prevUserId) {
            while (newUser === prevUserId) {
                newUser = Math.floor(Math.random() * DataStore.usersFromLocal.length)
            }
        } else if (arrayWithUsers.includes(newUser)) {
            while (arrayWithUsers.includes(newUser)) {
                newUser = Math.floor(Math.random() * DataStore.usersFromLocal.length)
            }
        }

        return newUser
    }

    generateRandomOwnerHistory = (finalPrice, finalOwner) => {
        const ownersCount = Math.floor(Math.random() * 5)
        const preFinalPrice = finalPrice - Math.floor(Math.random() * (Math.floor(finalPrice / 20)))
        const ownerHistory = [{id: finalOwner, price: preFinalPrice}]

        let tempHistory = []
        let prevPrice = 0
        let prevUserId = 0

        for (let tempOwner = 0; tempOwner <= ownersCount; tempOwner++) {
            const newUser = this.generateRandomUser(tempHistory, prevUserId, finalOwner, [])
            prevUserId = newUser
            
            if (tempOwner === 0) {
                prevPrice = Math.floor(Math.random() * 200)
                tempHistory.unshift({
                    id: newUser,
                    price: prevPrice
                })
            } else {
                prevPrice = Math.floor(Math.random() * (preFinalPrice - prevPrice) + prevPrice)
                tempHistory.unshift({
                    id: newUser,
                    price: prevPrice
                })
            }
        }

        return ownerHistory.concat(tempHistory)
    }

    getShopAssortmentFromLocal = () => {
        const tempShop = JSON.parse(localStorage.getItem('shopStore'))

        if (!!tempShop) {
            return tempShop
        } else {
            const generatedAssortment = this.generateRandomActivity()
            localStorage.setItem('shopStore', JSON.stringify(generatedAssortment))
            return generatedAssortment
        }
    }
}

export default new ShopStore()