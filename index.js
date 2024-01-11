function dom() {
    const canvas = document.querySelector(".home>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    function files(index) {
        var data = `https://i.postimg.cc/MZjz0cKp/pexels-tima-miroshnichenko-7033923-000.jpg
  https://i.postimg.cc/kX3qTnBF/pexels-tima-miroshnichenko-7033923-001.jpg
  https://i.postimg.cc/zGq510wy/pexels-tima-miroshnichenko-7033923-002.jpg
  https://i.postimg.cc/3x9hrm9n/pexels-tima-miroshnichenko-7033923-003.jpg
  https://i.postimg.cc/nLzJXrPZ/pexels-tima-miroshnichenko-7033923-004.jpg
  https://i.postimg.cc/8PRD3qv8/pexels-tima-miroshnichenko-7033923-005.jpg
  https://i.postimg.cc/FKBQ3vMS/pexels-tima-miroshnichenko-7033923-006.jpg
  https://i.postimg.cc/XqMS1877/pexels-tima-miroshnichenko-7033923-007.jpg
  https://i.postimg.cc/JnHCQg82/pexels-tima-miroshnichenko-7033923-008.jpg
  https://i.postimg.cc/FFcQd2Df/pexels-tima-miroshnichenko-7033923-009.jpg
  https://i.postimg.cc/KjnX6MR7/pexels-tima-miroshnichenko-7033923-010.jpg
  https://i.postimg.cc/15Q1pJjv/pexels-tima-miroshnichenko-7033923-011.jpg
  https://i.postimg.cc/zXFZpTm8/pexels-tima-miroshnichenko-7033923-012.jpg
  https://i.postimg.cc/T328shGm/pexels-tima-miroshnichenko-7033923-013.jpg
  https://i.postimg.cc/253szJ1S/pexels-tima-miroshnichenko-7033923-014.jpg
  https://i.postimg.cc/Ls7rhTPB/pexels-tima-miroshnichenko-7033923-015.jpg
  https://i.postimg.cc/L8ydFR6W/pexels-tima-miroshnichenko-7033923-016.jpg
  https://i.postimg.cc/NMHZXH7h/pexels-tima-miroshnichenko-7033923-017.jpg
  https://i.postimg.cc/KjhwD8J1/pexels-tima-miroshnichenko-7033923-018.jpg
  https://i.postimg.cc/Hn0KZ1hB/pexels-tima-miroshnichenko-7033923-019.jpg
  https://i.postimg.cc/MZ1hK1pV/pexels-tima-miroshnichenko-7033923-020.jpg
  https://i.postimg.cc/SNqHXjn5/pexels-tima-miroshnichenko-7033923-021.jpg
  https://i.postimg.cc/3JBV27pw/pexels-tima-miroshnichenko-7033923-022.jpg
  https://i.postimg.cc/4xxM5MbQ/pexels-tima-miroshnichenko-7033923-023.jpg
  https://i.postimg.cc/sgHL0cTd/pexels-tima-miroshnichenko-7033923-024.jpg
  https://i.postimg.cc/jjW1V71W/pexels-tima-miroshnichenko-7033923-025.jpg
  https://i.postimg.cc/5tZRftcs/pexels-tima-miroshnichenko-7033923-026.jpg
  https://i.postimg.cc/KzBsjyxx/pexels-tima-miroshnichenko-7033923-027.jpg
  https://i.postimg.cc/SR41ztx8/pexels-tima-miroshnichenko-7033923-028.jpg
  https://i.postimg.cc/SRGTL7nP/pexels-tima-miroshnichenko-7033923-029.jpg
  https://i.postimg.cc/J732WmpQ/pexels-tima-miroshnichenko-7033923-030.jpg
  https://i.postimg.cc/BQqwSyyf/pexels-tima-miroshnichenko-7033923-031.jpg
  https://i.postimg.cc/rFQZKjX0/pexels-tima-miroshnichenko-7033923-032.jpg
  https://i.postimg.cc/mgkXM9Bd/pexels-tima-miroshnichenko-7033923-033.jpg
  https://i.postimg.cc/vZKPvmmG/pexels-tima-miroshnichenko-7033923-034.jpg
  https://i.postimg.cc/jjJM3rWP/pexels-tima-miroshnichenko-7033923-035.jpg
  https://i.postimg.cc/hjWpH3xw/pexels-tima-miroshnichenko-7033923-036.jpg
  https://i.postimg.cc/fLcBZjfb/pexels-tima-miroshnichenko-7033923-037.jpg
  https://i.postimg.cc/RhvG06gL/pexels-tima-miroshnichenko-7033923-038.jpg
  https://i.postimg.cc/fWvBrCb2/pexels-tima-miroshnichenko-7033923-039.jpg
  https://i.postimg.cc/j2vcnx90/pexels-tima-miroshnichenko-7033923-040.jpg
  https://i.postimg.cc/fTTBndtw/pexels-tima-miroshnichenko-7033923-041.jpg
  https://i.postimg.cc/bNCLzvk1/pexels-tima-miroshnichenko-7033923-042.jpg
  https://i.postimg.cc/DwS6mKPH/pexels-tima-miroshnichenko-7033923-043.jpg
  https://i.postimg.cc/SxHrMtZs/pexels-tima-miroshnichenko-7033923-044.jpg
  https://i.postimg.cc/rpW9CCb9/pexels-tima-miroshnichenko-7033923-045.jpg
  https://i.postimg.cc/Jn5cS7RD/pexels-tima-miroshnichenko-7033923-046.jpg
  https://i.postimg.cc/FzFgvtKP/pexels-tima-miroshnichenko-7033923-047.jpg
  https://i.postimg.cc/MHs0KsMz/pexels-tima-miroshnichenko-7033923-048.jpg
  https://i.postimg.cc/3r9FBwLz/pexels-tima-miroshnichenko-7033923-049.jpg
  https://i.postimg.cc/X7JcD0mq/pexels-tima-miroshnichenko-7033923-050.jpg
  https://i.postimg.cc/5NR5hRW3/pexels-tima-miroshnichenko-7033923-051.jpg
  https://i.postimg.cc/0yKGP08q/pexels-tima-miroshnichenko-7033923-052.jpg
  https://i.postimg.cc/bvXxJSJS/pexels-tima-miroshnichenko-7033923-053.jpg
  https://i.postimg.cc/Pqmm8fp3/pexels-tima-miroshnichenko-7033923-054.jpg
  https://i.postimg.cc/Kzxt7XtZ/pexels-tima-miroshnichenko-7033923-055.jpg
  https://i.postimg.cc/Tw0gCkcn/pexels-tima-miroshnichenko-7033923-056.jpg
  https://i.postimg.cc/8cCW3hy9/pexels-tima-miroshnichenko-7033923-057.jpg
  https://i.postimg.cc/qqZndzSR/pexels-tima-miroshnichenko-7033923-058.jpg
  https://i.postimg.cc/wxWDNGMp/pexels-tima-miroshnichenko-7033923-059.jpg
  https://i.postimg.cc/hPfT11Q7/pexels-tima-miroshnichenko-7033923-060.jpg
  https://i.postimg.cc/7Yd7sJSt/pexels-tima-miroshnichenko-7033923-061.jpg
  https://i.postimg.cc/6pZZD60W/pexels-tima-miroshnichenko-7033923-062.jpg
  https://i.postimg.cc/cJN3Zq9Q/pexels-tima-miroshnichenko-7033923-063.jpg
  https://i.postimg.cc/wBcmjWZn/pexels-tima-miroshnichenko-7033923-064.jpg
  https://i.postimg.cc/TwdWLVX1/pexels-tima-miroshnichenko-7033923-065.jpg
  https://i.postimg.cc/Y9dL1vp3/pexels-tima-miroshnichenko-7033923-066.jpg
  https://i.postimg.cc/Hnjc3TnC/pexels-tima-miroshnichenko-7033923-067.jpg
  https://i.postimg.cc/8c3F0xff/pexels-tima-miroshnichenko-7033923-068.jpg
  https://i.postimg.cc/CM6f5nrM/pexels-tima-miroshnichenko-7033923-069.jpg
  https://i.postimg.cc/gkCXqFPf/pexels-tima-miroshnichenko-7033923-070.jpg
  https://i.postimg.cc/8PJf6kxR/pexels-tima-miroshnichenko-7033923-071.jpg
  https://i.postimg.cc/fbZVpcyC/pexels-tima-miroshnichenko-7033923-072.jpg
  https://i.postimg.cc/vmz4s46s/pexels-tima-miroshnichenko-7033923-073.jpg
  https://i.postimg.cc/Px5Prdm8/pexels-tima-miroshnichenko-7033923-074.jpg  
  https://i.postimg.cc/jjN5W8kx/video-again-026.jpg
  https://i.postimg.cc/NjZFjhDC/video-again-027.jpg
  https://i.postimg.cc/Y9HSQ1J1/video-again-028.jpg
  https://i.postimg.cc/mDygjPsK/video-again-029.jpg
  https://i.postimg.cc/BbZQVJZb/video-again-030.jpg
  https://i.postimg.cc/Y28SmL8W/video-again-031.jpg
  https://i.postimg.cc/br6NX4dT/video-again-032.jpg
  https://i.postimg.cc/Wb31mpff/video-again-033.jpg
  https://i.postimg.cc/9FnFL36X/video-again-034.jpg
  https://i.postimg.cc/MpfZ4Pw7/video-again-035.jpg
  https://i.postimg.cc/W38srxmv/video-again-036.jpg
  https://i.postimg.cc/vTmbvXX6/video-again-037.jpg
  https://i.postimg.cc/rp6yL1yv/video-again-038.jpg
  https://i.postimg.cc/7LgHP5fb/video-again-039.jpg
  https://i.postimg.cc/cH0svdnh/video-again-040.jpg
  https://i.postimg.cc/1XYP76Y7/video-again-041.jpg
  https://i.postimg.cc/bNsqDCs7/video-again-042.jpg
  https://i.postimg.cc/zX68nChV/video-again-043.jpg
  https://i.postimg.cc/qvK0QNcQ/video-again-044.jpg
  https://i.postimg.cc/k5dCH7fC/video-again-045.jpg
  https://i.postimg.cc/g0qpF1TZ/video-again-046.jpg
  https://i.postimg.cc/xCf20gwF/video-again-047.jpg
  https://i.postimg.cc/C1cVdkYM/video-again-048.jpg
  https://i.postimg.cc/zvMZFNV9/video-again-049.jpg
  https://i.postimg.cc/xjF22vtt/video-again-050.jpg
  https://i.postimg.cc/SN2pNnPq/video-again-051.jpg
  https://i.postimg.cc/28sNqzpW/video-again-052.jpg
  https://i.postimg.cc/7ZS80pDW/video-again-053.jpg
  https://i.postimg.cc/SKq0rDxN/video-again-054.jpg
  https://i.postimg.cc/431DFVYv/video-again-055.jpg
  https://i.postimg.cc/Qtx2LC72/video-again-056.jpg
  https://i.postimg.cc/tTSL9btY/video-again-057.jpg
  https://i.postimg.cc/7h5j6RmX/video-again-058.jpg
  https://i.postimg.cc/BbRk1Cz3/video-again-059.jpg
  https://i.postimg.cc/G3fZNcmf/video-again-060.jpg
  https://i.postimg.cc/Pr8BnBL5/video-again-061.jpg
  https://i.postimg.cc/6pJFWYRL/video-again-062.jpg
  https://i.postimg.cc/pLf4pzJN/video-again-063.jpg
  https://i.postimg.cc/pdP78rsm/video-again-064.jpg
  https://i.postimg.cc/d0nf9Ff4/video-again-065.jpg
  https://i.postimg.cc/sXXN68dy/video-again-066.jpg
  https://i.postimg.cc/B6Vwdg4F/video-again-067.jpg
  https://i.postimg.cc/QCKnsTdy/video-again-068.jpg
  https://i.postimg.cc/w3K4BjtT/video-again-069.jpg
  https://i.postimg.cc/PfLtNVLB/video-again-070.jpg
  https://i.postimg.cc/ryvq4Gxz/video-again-071.jpg
  https://i.postimg.cc/kXKqvVvs/video-again-072.jpg
  https://i.postimg.cc/kgC91njm/video-again-073.jpg
  https://i.postimg.cc/rw9T7vbt/video-again-074.jpg
  https://i.postimg.cc/g0kppgFt/video-again-075.jpg
  https://i.postimg.cc/Zq7S56Jb/video-again-076.jpg
  https://i.postimg.cc/tTsHZ7gh/video-again-077.jpg
  https://i.postimg.cc/wvnYhHtn/video-again-078.jpg
  https://i.postimg.cc/mkMfjqCk/video-again-079.jpg
  https://i.postimg.cc/wxsp9tZz/video-again-080.jpg
  https://i.postimg.cc/VLQcvfPC/video-again-081.jpg
  https://i.postimg.cc/tC3GVK9m/video-again-082.jpg
  https://i.postimg.cc/HkTD06xW/video-again-083.jpg
  https://i.postimg.cc/x1gr6LJv/video-again-084.jpg
  https://i.postimg.cc/k550zDKk/video-again-085.jpg
  https://i.postimg.cc/HLPqgHtj/video-again-086.jpg
  https://i.postimg.cc/sXQtf8nm/video-again-087.jpg
  https://i.postimg.cc/26sg1wMD/video-again-088.jpg
  https://i.postimg.cc/bYnKK7SN/video-again-089.jpg
  https://i.postimg.cc/nct6Z3qK/video-again-090.jpg
  https://i.postimg.cc/DydRz1c9/video-again-091.jpg
  https://i.postimg.cc/CxhXndPz/video-again-092.jpg
  https://i.postimg.cc/rwfb1c3g/video-again-093.jpg
  https://i.postimg.cc/Gp9fzV1R/video-again-094.jpg
  https://i.postimg.cc/xd74Z50z/video-again-095.jpg
  https://i.postimg.cc/1tqj1FtY/video-again-096.jpg
  https://i.postimg.cc/d3cSs0ZQ/video-again-097.jpg
  https://i.postimg.cc/3NjfdH2X/video-again-098.jpg
  https://i.postimg.cc/NGRzNRZK/video-again-099.jpg
  https://i.postimg.cc/RV9b2NzX/video-again-100.jpg
  https://i.postimg.cc/pXZ1vRWx/video-again-101.jpg
  https://i.postimg.cc/kggYXzGS/video-again-102.jpg
  https://i.postimg.cc/vZ2q1hxN/video-again-103.jpg
  https://i.postimg.cc/cJKDf3Q4/video-again-104.jpg
  https://i.postimg.cc/Bvdmpvg5/video-again-105.jpg
  https://i.postimg.cc/h4828c7x/video-again-106.jpg
  https://i.postimg.cc/ZKVjgHH5/video-again-107.jpg
  https://i.postimg.cc/XYqx051c/video-again-108.jpg
  https://i.postimg.cc/RFwq6Ph1/video-again-155.jpg
  https://i.postimg.cc/HnHnQQ8q/video-again-156.jpg
  https://i.postimg.cc/qvgRXBgv/video-again-157.jpg
  https://i.postimg.cc/XYhv2Myc/video-again-158.jpg
  https://i.postimg.cc/zfgG6dCm/video-again-159.jpg
  https://i.postimg.cc/DZ3wTq6S/video-again-160.jpg
  https://i.postimg.cc/d1RttLN4/video-again-161.jpg
  https://i.postimg.cc/7hmH0jkz/video-again-162.jpg
  https://i.postimg.cc/VsRLx0CN/video-again-163.jpg
  https://i.postimg.cc/yY8Ys6my/video-again-164.jpg
  https://i.postimg.cc/W1DNq9fD/video-again-165.jpg
  https://i.postimg.cc/Dwt2rqtx/video-again-166.jpg
  https://i.postimg.cc/0QvP395m/video-again-167.jpg
  https://i.postimg.cc/VNnzDJwm/video-again-168.jpg
  https://i.postimg.cc/QtqhZvVz/video-again-169.jpg
  https://i.postimg.cc/Y0n7hg6f/video-again-170.jpg
  https://i.postimg.cc/8ktNK82J/video-again-171.jpg
  https://i.postimg.cc/rsFcVgrw/video-again-172.jpg
  https://i.postimg.cc/J40mS68T/video-again-173.jpg
  https://i.postimg.cc/4N0ZG6NX/video-again-174.jpg
  https://i.postimg.cc/3xDhxkdm/video-again-175.jpg
  https://i.postimg.cc/QMG39jTP/video-again-176.jpg
  https://i.postimg.cc/25Qfngd5/video-again-177.jpg
  https://i.postimg.cc/qRpHwQQx/video-again-178.jpg
  https://i.postimg.cc/ZRjtM3Mt/video-again-179.jpg
  https://i.postimg.cc/XqJSSJRZ/video-again-180.jpg
  https://i.postimg.cc/yxbqVKKL/video-again-181.jpg
  https://i.postimg.cc/158hv802/video-again-182.jpg
  https://i.postimg.cc/fW2Q7cdY/video-again-183.jpg
  https://i.postimg.cc/HsFGRTBx/video-again-184.jpg
  https://i.postimg.cc/mgMxGK5S/video-again-185.jpg
  https://i.postimg.cc/cJNp1XqG/video-again-186.jpg
  https://i.postimg.cc/L4ZpH69r/20230221-2357541-000.jpg
https://i.postimg.cc/GhFny7sK/20230221-2357541-001.jpg
https://i.postimg.cc/T1nFn1h1/20230221-2357541-002.jpg
https://i.postimg.cc/25XsDgPk/20230221-2357541-003.jpg
https://i.postimg.cc/ydgwYvHF/20230221-2357541-004.jpg
https://i.postimg.cc/1zzkby77/20230221-2357541-005.jpg
https://i.postimg.cc/Dw7kdrrT/20230221-2357541-006.jpg
https://i.postimg.cc/C139Zkh9/20230221-2357541-007.jpg
https://i.postimg.cc/pLkN0mCn/20230221-2357541-008.jpg
https://i.postimg.cc/dtKzw2Sy/20230221-2357541-009.jpg
https://i.postimg.cc/6pMSrD6r/20230221-2357541-010.jpg
https://i.postimg.cc/5NqD0XZk/20230221-2357541-011.jpg
https://i.postimg.cc/jSxmJsTq/20230221-2357541-012.jpg
https://i.postimg.cc/ry4vBngT/20230221-2357541-013.jpg
https://i.postimg.cc/PqN722NB/20230221-2357541-014.jpg
https://i.postimg.cc/0QwBqjYn/20230221-2357541-015.jpg
https://i.postimg.cc/8C303M6s/20230221-2357541-016.jpg
https://i.postimg.cc/Hn1PWm3g/20230221-2357541-017.jpg
https://i.postimg.cc/8cdXjYnr/20230221-2357541-018.jpg
https://i.postimg.cc/Nf4PtWH3/20230221-2357541-019.jpg
https://i.postimg.cc/pVK6G9XX/20230221-2357541-020.jpg
https://i.postimg.cc/httZtp8f/20230221-2357541-021.jpg
https://i.postimg.cc/BQswdqX5/20230221-2357541-022.jpg
https://i.postimg.cc/nhSRjBTT/20230221-2357541-023.jpg
https://i.postimg.cc/3wyLgNch/20230221-2357541-024.jpg
https://i.postimg.cc/tgLBDbKx/20230221-2357541-025.jpg
https://i.postimg.cc/DZLBMDhY/20230221-2357541-026.jpg
https://i.postimg.cc/Vs9K93DJ/20230221-2357541-027.jpg
https://i.postimg.cc/Bb3M9gQZ/20230221-2357541-028.jpg
https://i.postimg.cc/9FWJLJnJ/20230221-2357541-029.jpg
https://i.postimg.cc/3NZ9KvdX/20230221-2357541-030.jpg
https://i.postimg.cc/RVXGywr9/20230221-2357541-031.jpg
https://i.postimg.cc/6pqzXTwZ/20230221-2357541-032.jpg
https://i.postimg.cc/V6QFnRt9/20230221-2357541-033.jpg
https://i.postimg.cc/qRsxL3cP/20230221-2357541-034.jpg
https://i.postimg.cc/5tF3XGXN/20230221-2357541-035.jpg
https://i.postimg.cc/dVf6tvtx/20230221-2357541-036.jpg
https://i.postimg.cc/gj4q9bT4/20230221-2357541-037.jpg
https://i.postimg.cc/D07dYwB8/20230221-2357541-038.jpg
https://i.postimg.cc/BZCCP2nD/20230221-2357541-039.jpg
https://i.postimg.cc/nccG4MXW/20230221-2357541-040.jpg
https://i.postimg.cc/RZW1Y8QQ/20230221-2357541-041.jpg
https://i.postimg.cc/QdvgZbfL/20230221-2357541-042.jpg
https://i.postimg.cc/zBrnVfm0/20230221-2357541-043.jpg
https://i.postimg.cc/DzsrvXNS/20230221-2357541-044.jpg
https://i.postimg.cc/76nS7ywD/20230221-2357541-045.jpg
https://i.postimg.cc/2yjh7XSW/20230221-2357541-046.jpg
https://i.postimg.cc/MHsRPbnF/20230221-2357541-047.jpg
https://i.postimg.cc/NGb1jYdk/20230221-2357541-048.jpg
https://i.postimg.cc/zXBTLMMZ/20230221-2357541-049.jpg
https://i.postimg.cc/s2FWN22s/20230221-2357541-050.jpg
https://i.postimg.cc/dVZd6Cw5/20230221-2357541-051.jpg
https://i.postimg.cc/Y9MWtygP/20230221-2357541-052.jpg
https://i.postimg.cc/mDjFkNyg/20230221-2357541-053.jpg
https://i.postimg.cc/X7zd9LSZ/20230221-2357541-054.jpg
https://i.postimg.cc/jjzf0rWN/20230221-2357541-055.jpg
https://i.postimg.cc/Y0SLWGdf/20230221-2357541-056.jpg
https://i.postimg.cc/ZKCyYNBJ/20230221-2357541-057.jpg
https://i.postimg.cc/T2kDX0Pk/20230221-2357541-058.jpg
https://i.postimg.cc/DyH4SzLL/20230221-2357541-059.jpg
https://i.postimg.cc/0Nq6CHtN/20230221-2357541-060.jpg
https://i.postimg.cc/GpJ4gJNx/20230221-2357541-061.jpg
https://i.postimg.cc/jSfwPr49/20230221-2357541-062.jpg
https://i.postimg.cc/Twdpz5vM/20230221-2357541-063.jpg
https://i.postimg.cc/vB0cb8G1/20230221-2357541-064.jpg
https://i.postimg.cc/8css58CZ/20230221-2357541-065.jpg
https://i.postimg.cc/yx5x3fgs/20230221-2357541-066.jpg
https://i.postimg.cc/8P2s10gb/20230221-2357541-067.jpg
https://i.postimg.cc/FFn76KP8/20230221-2357541-068.jpg
https://i.postimg.cc/8CD5vf5J/20230221-2357541-069.jpg
https://i.postimg.cc/DzgzPfJC/20230221-2357541-070.jpg
https://i.postimg.cc/hPzfRq6j/20230221-2357541-071.jpg
https://i.postimg.cc/VkXv5WYP/20230221-2357541-072.jpg
https://i.postimg.cc/MTppPk1z/20230221-2357541-073.jpg
https://i.postimg.cc/TwNYBkcg/20230221-2357541-074.jpg
https://i.postimg.cc/PJLrHm6c/20230221-2357541-075.jpg
https://i.postimg.cc/Kjdc8RwY/20230221-2357541-076.jpg
https://i.postimg.cc/9XSQpn0j/20230221-2357541-077.jpg
https://i.postimg.cc/YqWqyzLL/20230221-2357541-078.jpg
https://i.postimg.cc/3xQJM02S/20230221-2357541-079.jpg
https://i.postimg.cc/rwGyqyJ8/20230221-2357541-080.jpg
https://i.postimg.cc/1z9mXxCD/20230221-2357541-081.jpg
https://i.postimg.cc/252zBHMM/20230221-2357541-082.jpg
https://i.postimg.cc/vBTG7rdB/20230221-2357541-083.jpg
https://i.postimg.cc/rstc3qs2/20230221-2357541-084.jpg
https://i.postimg.cc/j51tMDsh/20230221-2357541-085.jpg
https://i.postimg.cc/14hPZbVn/20230221-2357541-086.jpg
https://i.postimg.cc/pV9FR8nR/20230221-2357541-087.jpg
https://i.postimg.cc/qB9CRR8n/20230221-2357541-088.jpg
https://i.postimg.cc/Nfm2rc4n/20230221-2357541-089.jpg
https://i.postimg.cc/g2pXVTt2/20230221-2357541-090.jpg
https://i.postimg.cc/g2KwNH1q/20230221-2357541-091.jpg
https://i.postimg.cc/q7MNYCTf/20230221-2357541-092.jpg
https://i.postimg.cc/7Ls5yYH5/20230221-2357541-093.jpg
https://i.postimg.cc/Kz1RcSjJ/20230221-2357541-094.jpg
https://i.postimg.cc/50Dj67F1/20230221-2357541-095.jpg
https://i.postimg.cc/T1m1mVrb/20230221-2357541-096.jpg
https://i.postimg.cc/sfZvtrt2/20230221-2357541-097.jpg
https://i.postimg.cc/J4NtzQ7V/20230221-2357541-098.jpg
https://i.postimg.cc/pXbpvSHJ/20230221-2357541-099.jpg
https://i.postimg.cc/Gmbt8s9B/20230221-2357541-100.jpg
https://i.postimg.cc/3wRw95XY/20230221-2357541-101.jpg
https://i.postimg.cc/4xwdzNhW/20230221-2357541-102.jpg
https://i.postimg.cc/nLPhPR27/20230221-2357541-103.jpg
https://i.postimg.cc/zBHGZC2Q/20230221-2357541-104.jpg
https://i.postimg.cc/prNX2mgL/20230221-2357541-105.jpg
https://i.postimg.cc/dQdV59yk/20230221-2357541-106.jpg
https://i.postimg.cc/6qd6T9XL/20230221-2357541-107.jpg
https://i.postimg.cc/Gm33hwSG/20230221-2357541-108.jpg
https://i.postimg.cc/KvDv2vQm/20230221-2357541-109.jpg
https://i.postimg.cc/Kv2vwgP9/20230221-2357541-110.jpg
https://i.postimg.cc/CxvhRPWt/20230221-2357541-111.jpg
https://i.postimg.cc/PqPtYbHq/20230221-2357541-112.jpg
https://i.postimg.cc/DzH7gWfP/20230221-2357541-113.jpg
https://i.postimg.cc/W3ZTf2hL/20230221-2357541-114.jpg
https://i.postimg.cc/Y0wk5JW4/20230221-2357541-115.jpg
https://i.postimg.cc/X744Q6Wm/20230221-2357541-116.jpg
https://i.postimg.cc/j2QKtZHM/20230221-2357541-117.jpg
https://i.postimg.cc/CMjwGL3b/20230221-2357541-118.jpg
https://i.postimg.cc/7Y9DRtY6/20230221-2357541-119.jpg
https://i.postimg.cc/JzhmC3GQ/20230221-2357541-120.jpg
https://i.postimg.cc/dVSFs7Cc/20230221-2357541-121.jpg
https://i.postimg.cc/PqpjPtbp/20230221-2357541-122.jpg
https://i.postimg.cc/25sfWPTH/20230221-2357541-123.jpg
https://i.postimg.cc/tTFGN2M9/20230221-2357541-124.jpg
https://i.postimg.cc/Rh95sKkK/20230221-2357541-125.jpg
https://i.postimg.cc/05dq6XSf/20230221-2357541-126.jpg
https://i.postimg.cc/L5TdrhS7/20230221-2357541-127.jpg
https://i.postimg.cc/gkzb3yqP/20230221-2357541-128.jpg
https://i.postimg.cc/hP2WsJpQ/20230221-2357541-129.jpg
https://i.postimg.cc/NjLhzgzJ/20230221-2357541-130.jpg
https://i.postimg.cc/Mp4kkCkW/20230221-2357541-131.jpg
https://i.postimg.cc/D05DxDd3/20230221-2357541-132.jpg
https://i.postimg.cc/Xqnmc35g/20230221-2357541-133.jpg
https://i.postimg.cc/ZRt1n6K2/20230221-2357541-134.jpg
https://i.postimg.cc/ydm2ZWDd/20230221-2357541-135.jpg
https://i.postimg.cc/6QGkBMwC/20230221-2357541-136.jpg
https://i.postimg.cc/MKKgn6q6/20230221-2357541-137.jpg
https://i.postimg.cc/FsW8cMHj/20230221-2357541-138.jpg
https://i.postimg.cc/YCvVxdvT/20230221-2357541-139.jpg
https://i.postimg.cc/VNMVx5BR/20230221-2357541-140.jpg
https://i.postimg.cc/cHSb0ZFN/20230221-2357541-141.jpg
https://i.postimg.cc/8zxYXLWc/20230221-2357541-142.jpg
https://i.postimg.cc/Hx9PLKN8/20230221-2357541-143.jpg
https://i.postimg.cc/7hPtJ9vs/20230221-2357541-144.jpg
https://i.postimg.cc/Vv7GqtmY/20230221-2357541-145.jpg
https://i.postimg.cc/sfKNdkSt/20230221-2357541-146.jpg
https://i.postimg.cc/SNstygfj/20230221-2357541-147.jpg
https://i.postimg.cc/PrRVN1Sy/20230221-2357541-148.jpg
https://i.postimg.cc/fRS2dkFN/20230221-2357541-149.jpg
https://i.postimg.cc/fbx8HpDq/20230221-2357541-150.jpg
https://i.postimg.cc/SK0ZfkFz/20230221-2357541-151.jpg
https://i.postimg.cc/4dsBjP3f/20230221-2357541-152.jpg
https://i.postimg.cc/C17m08Zj/20230221-2357541-153.jpg
https://i.postimg.cc/BbvNnvDR/20230221-2357541-154.jpg
https://i.postimg.cc/rsYj0LNs/20230221-2357541-155.jpg
https://i.postimg.cc/zDd0PnYN/20230221-2357541-156.jpg
https://i.postimg.cc/m2t8xtTH/20230221-2357541-157.jpg
https://i.postimg.cc/wBdVs2LX/20230221-2357541-158.jpg
https://i.postimg.cc/152MyszY/20230221-2357541-159.jpg
https://i.postimg.cc/rw4jm30y/20230221-2357541-160.jpg
https://i.postimg.cc/3wCZjGFP/20230221-2357541-161.jpg
https://i.postimg.cc/G2LxXpM9/20230221-2357541-162.jpg
https://i.postimg.cc/Gt9J15nC/20230221-2357541-163.jpg
https://i.postimg.cc/85ZB9V34/20230221-2357541-164.jpg
https://i.postimg.cc/kGZNMv7t/20230221-2357541-165.jpg
https://i.postimg.cc/Y2yzxMQq/20230221-2357541-166.jpg
https://i.postimg.cc/L6YBCwVk/20230221-2357541-167.jpg
  `;
        return data.split("\n")[index];
    }

    const frameCount = 358;

    const images = [];
    const imageSeq = {
        frame: 0
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 1.8,
            pin: true,
            trigger: ".home",
        },
        onUpdate: render
    });

    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }

    gsap.to(".home canvas", {
        scale: 0.8,
        scrollTrigger: {
            scrub: .1,
            trigger: ".home",
            start: "bottom 100%",
            // markers:true,
        },
    })
    ScrollTrigger.create({
        trigger: ".home",
        pin: true,
        start: "bottom 100%",
    })

}

dom()