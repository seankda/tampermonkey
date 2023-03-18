// ==UserScript==
// @name         Crunchyroll: One Piece Labeler
// @namespace    https://seankda.com
// @version      1.0
// @description  Labels episodes as CANON, MIXED, or FILLER based on: https://www.animefillerlist.com/shows/one-piece
// @match        https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece
// @icon         https://www.google.com/s2/favicons?sz=64&domain=crunchyroll.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function applyLabel() {
        const episodeLinks = document.querySelectorAll('a[class*="playable-card-static__link--"], a[class*="episode-card__link--"]');
        const canonEpisodes = ['E1 ', 'E2 ', 'E3 ', 'E4 ', 'E5 ', 'E6 ', 'E7 ', 'E8 ', 'E9 ', 'E10 ', 'E11 ', 'E12 ', 'E13 ', 'E14 ', 'E15 ', 'E16 ', 'E17 ', 'E18 ', 'E19 ', 'E20 ', 'E21 ', 'E22 ', 'E23 ', 'E24 ', 'E25 ', 'E26 ', 'E27 ', 'E28 ', 'E29 ', 'E30 ', 'E31 ', 'E32 ', 'E33 ', 'E34 ', 'E35 ', 'E36 ', 'E37 ', 'E38 ', 'E39 ', 'E40 ', 'E41 ', 'E42 ', 'E43 ', 'E44 ', 'E45 ', 'E48 ', 'E49 ', 'E50 ', 'E51 ', 'E52 ', 'E53 ', 'E62 ', 'E63 ', 'E64 ', 'E65 ', 'E66 ', 'E67 ', 'E70 ', 'E71 ', 'E72 ', 'E73 ', 'E74 ', 'E75 ', 'E76 ', 'E77 ', 'E78 ', 'E79 ', 'E80 ', 'E81 ', 'E82 ', 'E83 ', 'E84 ', 'E85 ', 'E86 ', 'E87 ', 'E88 ', 'E89 ', 'E90 ', 'E91 ', 'E92 ', 'E93 ', 'E94 ', 'E95 ', 'E96 ', 'E97 ', 'E100 ', 'E103 ', 'E104 ', 'E105 ', 'E106 ', 'E107 ', 'E108 ', 'E109 ', 'E110 ', 'E111 ', 'E112 ', 'E113 ', 'E114 ', 'E115 ', 'E116 ', 'E117 ', 'E118 ', 'E119 ', 'E120 ', 'E121 ', 'E122 ', 'E123 ', 'E124 ', 'E125 ', 'E126 ', 'E127 ', 'E128 ', 'E129 ', 'E130 ', 'E144 ', 'E145 ', 'E146 ', 'E147 ', 'E148 ', 'E149 ', 'E150 ', 'E151 ', 'E152 ', 'E153 ', 'E154 ', 'E155 ', 'E156 ', 'E157 ', 'E158 ', 'E159 ', 'E160 ', 'E161 ', 'E162 ', 'E163 ', 'E164 ', 'E165 ', 'E166 ', 'E167 ', 'E168 ', 'E169 ', 'E170 ', 'E171 ', 'E172 ', 'E173 ', 'E174 ', 'E175 ', 'E176 ', 'E177 ', 'E178 ', 'E179 ', 'E180 ', 'E181 ', 'E182 ', 'E183 ', 'E184 ', 'E185 ', 'E186 ', 'E187 ', 'E188 ', 'E189 ', 'E190 ', 'E191 ', 'E192 ', 'E193 ', 'E194 ', 'E195 ', 'E207 ', 'E208 ', 'E209 ', 'E210 ', 'E211 ', 'E212 ', 'E213 ', 'E214 ', 'E215 ', 'E216 ', 'E217 ', 'E218 ', 'E219 ', 'E227 ', 'E228 ', 'E229 ', 'E230 ', 'E231 ', 'E232 ', 'E233 ', 'E234 ', 'E235 ', 'E236 ', 'E237 ', 'E238 ', 'E239 ', 'E240 ', 'E241 ', 'E242 ', 'E243 ', 'E244 ', 'E245 ', 'E246 ', 'E247 ', 'E248 ', 'E249 ', 'E250 ', 'E251 ', 'E252 ', 'E253 ', 'E254 ', 'E255 ', 'E256 ', 'E257 ', 'E258 ', 'E259 ', 'E260 ', 'E261 ', 'E262 ', 'E263 ', 'E264 ', 'E265 ', 'E266 ', 'E267 ', 'E268 ', 'E269 ', 'E270 ', 'E271 ', 'E272 ', 'E273 ', 'E274 ', 'E275 ', 'E276 ', 'E277 ', 'E278 ', 'E284 ', 'E285 ', 'E286 ', 'E287 ', 'E288 ', 'E289 ', 'E290 ', 'E293 ', 'E294 ', 'E295 ', 'E296 ', 'E297 ', 'E298 ', 'E299 ', 'E300 ', 'E301 ', 'E302 ', 'E304 ', 'E305 ', 'E306 ', 'E307 ', 'E308 ', 'E309 ', 'E310 ', 'E311 ', 'E312 ', 'E313 ', 'E314 ', 'E315 ', 'E316 ', 'E320 ', 'E321 ', 'E322 ', 'E323 ', 'E324 ', 'E325 ', 'E337 ', 'E338 ', 'E339 ', 'E340 ', 'E341 ', 'E342 ', 'E343 ', 'E344 ', 'E345 ', 'E346 ', 'E347 ', 'E348 ', 'E349 ', 'E350 ', 'E351 ', 'E352 ', 'E353 ', 'E355 ', 'E356 ', 'E357 ', 'E358 ', 'E359 ', 'E360 ', 'E361 ', 'E362 ', 'E363 ', 'E364 ', 'E365 ', 'E366 ', 'E367 ', 'E368 ', 'E369 ', 'E370 ', 'E371 ', 'E372 ', 'E373 ', 'E374 ', 'E375 ', 'E376 ', 'E377 ', 'E378 ', 'E379 ', 'E380 ', 'E381 ', 'E385 ', 'E386 ', 'E387 ', 'E388 ', 'E389 ', 'E390 ', 'E391 ', 'E392 ', 'E393 ', 'E394 ', 'E395 ', 'E396 ', 'E397 ', 'E398 ', 'E399 ', 'E400 ', 'E401 ', 'E402 ', 'E403 ', 'E404 ', 'E405 ', 'E408 ', 'E409 ', 'E410 ', 'E411 ', 'E412 ', 'E413 ', 'E414 ', 'E415 ', 'E416 ', 'E417 ', 'E418 ', 'E419 ', 'E420 ', 'E422 ', 'E423 ', 'E424 ', 'E425 ', 'E430 ', 'E431 ', 'E432 ', 'E433 ', 'E434 ', 'E435 ', 'E436 ', 'E437 ', 'E438 ', 'E439 ', 'E440 ', 'E441 ', 'E442 ', 'E443 ', 'E444 ', 'E445 ', 'E446 ', 'E447 ', 'E448 ', 'E449 ', 'E450 ', 'E451 ', 'E452 ', 'E453 ', 'E454 ', 'E455 ', 'E456 ', 'E459 ', 'E460 ', 'E461 ', 'E462 ', 'E463 ', 'E464 ', 'E465 ', 'E466 ', 'E467 ', 'E468 ', 'E469 ', 'E470 ', 'E471 ', 'E472 ', 'E473 ', 'E474 ', 'E475 ', 'E476 ', 'E477 ', 'E478 ', 'E479 ', 'E480 ', 'E481 ', 'E482 ', 'E483 ', 'E484 ', 'E485 ', 'E486 ', 'E487 ', 'E488 ', 'E490 ', 'E491 ', 'E493 ', 'E494 ', 'E495 ', 'E496 ', 'E497 ', 'E498 ', 'E499 ', 'E500 ', 'E501 ', 'E502 ', 'E503 ', 'E504 ', 'E505 ', 'E506 ', 'E507 ', 'E508 ', 'E509 ', 'E510 ', 'E511 ', 'E512 ', 'E513 ', 'E514 ', 'E515 ', 'E516 ', 'E517 ', 'E518 ', 'E519 ', 'E521 ', 'E522 ', 'E523 ', 'E524 ', 'E525 ', 'E526 ', 'E527 ', 'E528 ', 'E529 ', 'E530 ', 'E531 ', 'E532 ', 'E533 ', 'E534 ', 'E535 ', 'E536 ', 'E537 ', 'E538 ', 'E539 ', 'E540 ', 'E541 ', 'E543 ', 'E544 ', 'E545 ', 'E546 ', 'E547 ', 'E548 ', 'E549 ', 'E550 ', 'E551 ', 'E552 ', 'E553 ', 'E554 ', 'E555 ', 'E556 ', 'E557 ', 'E558 ', 'E559 ', 'E560 ', 'E561 ', 'E562 ', 'E563 ', 'E564 ', 'E565 ', 'E566 ', 'E567 ', 'E568 ', 'E569 ', 'E570 ', 'E571 ', 'E572 ', 'E573 ', 'E579 ', 'E580 ', 'E581 ', 'E582 ', 'E583 ', 'E584 ', 'E585 ', 'E586 ', 'E587 ', 'E588 ', 'E589 ', 'E591 ', 'E592 ', 'E593 ', 'E594 ', 'E595 ', 'E596 ', 'E597 ', 'E598 ', 'E599 ', 'E600 ', 'E601 ', 'E602 ', 'E603 ', 'E604 ', 'E605 ', 'E606 ', 'E607 ', 'E608 ', 'E609 ', 'E610 ', 'E611 ', 'E612 ', 'E613 ', 'E614 ', 'E615 ', 'E616 ', 'E617 ', 'E618 ', 'E619 ', 'E620 ', 'E621 ', 'E622 ', 'E623 ', 'E624 ', 'E629 ', 'E630 ', 'E631 ', 'E632 ', 'E634 ', 'E635 ', 'E636 ', 'E637 ', 'E638 ', 'E639 ', 'E640 ', 'E641 ', 'E642 ', 'E643 ', 'E644 ', 'E645 ', 'E646 ', 'E647 ', 'E648 ', 'E649 ', 'E650 ', 'E651 ', 'E652 ', 'E654 ', 'E655 ', 'E656 ', 'E658 ', 'E659 ', 'E660 ', 'E661 ', 'E662 ', 'E663 ', 'E664 ', 'E665 ', 'E666 ', 'E667 ', 'E668 ', 'E669 ', 'E670 ', 'E671 ', 'E672 ', 'E673 ', 'E674 ', 'E675 ', 'E676 ', 'E677 ', 'E678 ', 'E680 ', 'E681 ', 'E682 ', 'E683 ', 'E684 ', 'E685 ', 'E686 ', 'E687 ', 'E688 ', 'E689 ', 'E691 ', 'E692 ', 'E693 ', 'E694 ', 'E695 ', 'E696 ', 'E697 ', 'E698 ', 'E699 ', 'E700 ', 'E701 ', 'E702 ', 'E703 ', 'E704 ', 'E705 ', 'E706 ', 'E707 ', 'E708 ', 'E709 ', 'E710 ', 'E711 ', 'E712 ', 'E713 ', 'E714 ', 'E715 ', 'E716 ', 'E717 ', 'E718 ', 'E719 ', 'E720 ', 'E721 ', 'E722 ', 'E723 ', 'E724 ', 'E725 ', 'E726 ', 'E727 ', 'E728 ', 'E729 ', 'E730 ', 'E732 ', 'E733 ', 'E734 ', 'E735 ', 'E736 ', 'E737 ', 'E739 ', 'E740 ', 'E741 ', 'E742 ', 'E743 ', 'E744 ', 'E745 ', 'E746 ', 'E752 ', 'E753 ', 'E754 ', 'E755 ', 'E756 ', 'E757 ', 'E758 ', 'E759 ', 'E760 ', 'E761 ', 'E762 ', 'E763 ', 'E764 ', 'E765 ', 'E766 ', 'E767 ', 'E768 ', 'E769 ', 'E770 ', 'E771 ', 'E772 ', 'E773 ', 'E774 ', 'E775 ', 'E776 ', 'E779 ', 'E783 ', 'E784 ', 'E785 ', 'E786 ', 'E787 ', 'E788 ', 'E790 ', 'E791 ', 'E792 ', 'E793 ', 'E794 ', 'E795 ', 'E796 ', 'E797 ', 'E798 ', 'E799 ', 'E800 ', 'E801 ', 'E802 ', 'E804 ', 'E805 ', 'E806 ', 'E808 ', 'E809 ', 'E810 ', 'E811 ', 'E812 ', 'E813 ', 'E814 ', 'E815 ', 'E816 ', 'E817 ', 'E818 ', 'E819 ', 'E820 ', 'E821 ', 'E822 ', 'E823 ', 'E824 ', 'E825 ', 'E826 ', 'E827 ', 'E828 ', 'E829 ', 'E830 ', 'E831 ', 'E832 ', 'E833 ', 'E834 ', 'E835 ', 'E836 ', 'E837 ', 'E838 ', 'E839 ', 'E840 ', 'E841 ', 'E842 ', 'E843 ', 'E844 ', 'E845 ', 'E846 ', 'E847 ', 'E848 ', 'E849 ', 'E850 ', 'E851 ', 'E852 ', 'E853 ', 'E854 ', 'E855 ', 'E856 ', 'E857 ', 'E858 ', 'E859 ', 'E860 ', 'E861 ', 'E862 ', 'E863 ', 'E864 ', 'E865 ', 'E866 ', 'E867 ', 'E868 ', 'E869 ', 'E870 ', 'E871 ', 'E872 ', 'E873 ', 'E874 ', 'E875 ', 'E876 ', 'E877 ', 'E880 ', 'E886 ', 'E891 ', 'E892 ', 'E893 ', 'E894 ', 'E897 ', 'E898 ', 'E899 ', 'E900 ', 'E901 ', 'E902 ', 'E903 ', 'E904 ', 'E905 ', 'E906 ', 'E908 ', 'E909 ', 'E910 ', 'E911 ', 'E912 ', 'E913 ', 'E914 ', 'E915 ', 'E916 ', 'E917 ', 'E918 ', 'E919 ', 'E920 ', 'E921 ', 'E922 ', 'E923 ', 'E925 ', 'E926 ', 'E927 ', 'E928 ', 'E929 ', 'E930 ', 'E931 ', 'E932 ', 'E933 ', 'E934 ', 'E935 ', 'E936 ', 'E937 ', 'E938 ', 'E939 ', 'E940 ', 'E941 ', 'E942 ', 'E943 ', 'E944 ', 'E945 ', 'E946 ', 'E947 ', 'E948 ', 'E949 ', 'E950 ', 'E951 ', 'E952 ', 'E953 ', 'E954 ', 'E955 ', 'E956 ', 'E957 ', 'E958 ', 'E959 ', 'E960 ', 'E961 ', 'E962 ', 'E963 ', 'E964 ', 'E965 ', 'E966 ', 'E967 ', 'E968 ', 'E969 ', 'E970 ', 'E971 ', 'E972 ', 'E973 ', 'E974 ', 'E975 ', 'E976 ', 'E977 ', 'E978 ', 'E979 ', 'E980 ', 'E981 ', 'E982 ', 'E983 ', 'E984 ', 'E985 ', 'E986 ', 'E987 ', 'E990 ', 'E992 ', 'E993 ', 'E994 ', 'E995 ', 'E996 ', 'E997 ', 'E998 ', 'E999 ', 'E1000 ', 'E1001 ', 'E1002 ', 'E1003 ', 'E1004 ', 'E1005 ', 'E1006 ', 'E1007 ', 'E1008 ', 'E1009 ', 'E1010 ', 'E1011 ', 'E1012 ', 'E1013 ', 'E1014 ', 'E1015 ', 'E1016 ', 'E1017 ', 'E1018 ', 'E1019 ', 'E1020 ', 'E1021 ', 'E1022 ', 'E1023 ', 'E1024 ', 'E1025 ', 'E1026 ', 'E1027 ', 'E1028 ', 'E1031 ', 'E1032 ', 'E1033 ', 'E1034 ', 'E1035 ', 'E1036 ', 'E1037 ', 'E1038 ', 'E1039 ', 'E1040 ', 'E1041 ', 'E1042 ', 'E1043 ', 'E1044 ', 'E1045 ', 'E1046 ', 'E1047 ', 'E1048 ', 'E1049 ', 'E1050 ', 'E1051 ', 'E1052 ', 'E1053 ', 'E1054 '];
        const mixedEpisodes = ['E46 ', 'E47 ', 'E61 ', 'E68 ', 'E69 ', 'E101 ', 'E354 ', 'E421 ', 'E489 ', 'E520 ', 'E574 ', 'E625 ', 'E628 ', 'E633 ', 'E653 ', 'E657 ', 'E679 ', 'E690 ', 'E731 ', 'E738 ', 'E751 ', 'E777 ', 'E778 ', 'E789 ', 'E803 ', 'E807 ', 'E878 ', 'E879 ', 'E881 ', 'E882 ', 'E883 ', 'E884 ', 'E885 ', 'E887 ', 'E888 ', 'E889 ', 'E890 ', 'E924 ', 'E988 ', 'E989 ', 'E991 ']
        const fillerEpisodes = ['E54 ', 'E55 ', 'E56 ', 'E57 ', 'E58 ', 'E59 ', 'E60 ', 'E98 ', 'E99 ', 'E102 ', 'E131 ', 'E132 ', 'E133 ', 'E134 ', 'E135 ', 'E136 ', 'E137 ', 'E138 ', 'E139 ', 'E140 ', 'E141 ', 'E142 ', 'E143 ', 'E196 ', 'E197 ', 'E198 ', 'E199 ', 'E200 ', 'E201 ', 'E202 ', 'E203 ', 'E204 ', 'E205 ', 'E206 ', 'E220 ', 'E221 ', 'E222 ', 'E223 ', 'E224 ', 'E225 ', 'E226 ', 'E279 ', 'E280 ', 'E281 ', 'E282 ', 'E283 ', 'E291 ', 'E292 ', 'E303 ', 'E317 ', 'E318 ', 'E319 ', 'E326 ', 'E327 ', 'E328 ', 'E329 ', 'E330 ', 'E331 ', 'E332 ', 'E333 ', 'E334 ', 'E335 ', 'E336 ', 'E382 ', 'E383 ', 'E384 ', 'E406 ', 'E407 ', 'E426 ', 'E427 ', 'E428 ', 'E429 ', 'E457 ', 'E458 ', 'E492 ', 'E542 ', 'E575 ', 'E576 ', 'E577 ', 'E578 ', 'E590 ', 'E626 ', 'E627 ', 'E747 ', 'E748 ', 'E749 ', 'E750 ', 'E780 ', 'E781 ', 'E782 ', 'E895 ', 'E896 ', 'E907 ', 'E1029 ', 'E1030 ']

        episodeLinks.forEach((episodeLink) => {
            const episodeTitle = episodeLink.getAttribute('title');
            const existingLabels = episodeLink.parentNode.querySelectorAll('.label');

            existingLabels.forEach((label) => {
                label.remove();
            });

            if (canonEpisodes.some((episode) => episodeTitle.includes(episode))) {
                const canonLabel = document.createElement('span');
                canonLabel.classList.add('label');
                canonLabel.textContent = 'CANON';
                canonLabel.style.backgroundColor = '#4CAF50';
                canonLabel.style.color = '#fff';
                canonLabel.style.padding = '2px 6px';
                canonLabel.style.borderRadius = '4px';
                canonLabel.style.marginLeft = '10px';
                episodeLink.parentNode.insertBefore(canonLabel, episodeLink.nextSibling);
            }

            if (mixedEpisodes.some((episode) => episodeTitle.includes(episode))) {
                const mixedLabel = document.createElement('span');
                mixedLabel.classList.add('label');
                mixedLabel.textContent = 'MIXED';
                mixedLabel.style.backgroundColor = '#19D6D4';
                mixedLabel.style.color = '#fff';
                mixedLabel.style.padding = '2px 6px';
                mixedLabel.style.borderRadius = '4px';
                mixedLabel.style.marginLeft = '10px';
                episodeLink.parentNode.insertBefore(mixedLabel, episodeLink.nextSibling);
            }

            if (fillerEpisodes.some((episode) => episodeTitle.includes(episode))) {
                const fillerLabel = document.createElement('span');
                fillerLabel.classList.add('label');
                fillerLabel.textContent = 'FILLER';
                fillerLabel.style.backgroundColor = '#FFA500';
                fillerLabel.style.color = '#fff';
                fillerLabel.style.padding = '2px 6px';
                fillerLabel.style.borderRadius = '4px';
                fillerLabel.style.marginLeft = '10px';
                episodeLink.parentNode.insertBefore(fillerLabel, episodeLink.nextSibling);
            }

        });
    }

    // Run the script on page load
    setTimeout(function () {
        applyLabel();
    }, 3000);

    // Add event listener to refresh button
    document.addEventListener('keydown', function (event) {
        if (event.key === 'r') {
            applyLabel();
        }
    });

    // Listen for click on "show more"
    const showMoreButton = document.querySelector('.button--xqVd0');

    document.addEventListener('click', function (event) {
        const clickedElement = event.target;
        if (clickedElement.getAttribute('role') === 'button') {
            applyLabel();
        }
    });

})();