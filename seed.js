var http = require('http');
var Cat = require('./models/cat');

Cat.count().then(function(count) {
	if (count === 0) {
		var catsSeed = [
			{fileURL: "http://25.media.tumblr.com/Jjkybd3nSfqigafwIsenIB0Uo1_500.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_ly65xhmThT1r2rj8po1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lilmy1BTO21qgnva2o1_500.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_m3yk9naMlR1qzabkfo1_1280.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m1yvlxXuHi1qewacoo1_500.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m8bvaxgd9t1qze0hyo1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lzusicxnBd1qbe5pxo1_1280.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m6emebBWXk1qzex9io1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lw7gkb0w2P1qbhms5o1_500.jpg"},
			{fileURL: "http://26.media.tumblr.com/tumblr_lt0vk1HLsR1qln00mo1_400.gif"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m4io04OWyM1qd477zo1_400.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m3z7yv4Xgk1qjc1a7o1_1280.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_lochzoykoK1qlyuwso1_500.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lx9k3q1IRj1qbd47zo1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lh9o38URUv1qfyzelo1_500.jpg"},
			{fileURL: "http://26.media.tumblr.com/tumblr_lzkh3vIoCl1r0mf7qo1_500.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_ly96zjgEXA1qz4ueho1_1280.png"},
			{fileURL: "http://25.media.tumblr.com/tumblr_lhuftfJbsM1qfyzelo1_400.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_m04ykj3J161rohhvpo1_1280.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m0mdbawYWl1qdymlyo1_500.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lmjwmwylp21qdth8zo1_400.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_lllc9ugIZl1qikh6fo1_500.gif"},
			{fileURL: "http://25.media.tumblr.com/tumblr_lz1pe06R4y1rotaveo1_500.gif"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m3479w6UX31qhwmnpo1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_ljx8e8W6821qh28hmo1_400.gif"},
			{fileURL: "http://28.media.tumblr.com/tumblr_lzxpf1Z9Un1qe49wpo1_500.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_lgeho8hGYP1qfyzelo1_1280.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m74d4udOsw1ql5i8yo1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lnq3fvcbP41qbt33io1_500.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m1cb1dnHPK1qze0hyo1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/qgIb8tERind0swsoQeMnOU9Wo1_400.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_lw19gvbfFS1qhmn4do2_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_m3bv17YJpG1r73wdao1_500.gif"}, // n°1 same as n°2
			{fileURL: "http://25.media.tumblr.com/tumblr_m3mt40gWvc1r73wdao1_500.jpg"},
			//{fileURL: "http://24.media.tumblr.com/tumblr_m2dx20y3pk1qa2i0uo1_500.gif"}, // n°2 same as n°1 so not added to seed
			{fileURL: "http://25.media.tumblr.com/tumblr_m289h0FOzv1qi23vmo1_500.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lxnd1iCxQp1r2rj8po1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lth8jmZY0Q1r40jc4o1_1280.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m12hnp9KdP1qbe5pxo1_1280.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_lhp53nDdzx1qgnva2o1_500.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_lp192zUcZM1qdth8zo1_1280.jpg"},
			{fileURL: "http://30.media.tumblr.com/qgIb8tERiq2ht9wytbuNyam3o1_500.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lyfofnhz8z1qzcwd4o1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lyk8daNsl21qao2x8o1_250.gif"},
			{fileURL: "http://25.media.tumblr.com/tumblr_lmgilqW6dp1qenqklo1_1280.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_lotmutnQ6O1qe5kp6o1_400.gif"},
			{fileURL: "http://25.media.tumblr.com/tumblr_mawjxwVmfy1qejbiro1_1280.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m855gntQ2Z1qejbiro1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_li3x7edfAJ1qgnva2o1_500.jpg"},
			{fileURL: "http://26.media.tumblr.com/tumblr_m2bgoiNkEk1qbuu1po1_1280.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_lklg0kGyQ71qabevuo1_500.gif"},
			{fileURL: "http://25.media.tumblr.com/tumblr_l2dbhoFObm1qzuz1to1_500.png"},
			{fileURL: "http://28.media.tumblr.com/qgIb8tERiqzcoq4xtylxAD4Io1_500.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_m2q5d6MqBq1r30oy5o1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_m87ekffrE21r2il6eo1_400.gif"},
			{fileURL: "http://24.media.tumblr.com/tumblr_m3nmyq0MAP1qz85pko1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_m492lxPPSE1qzk2dso1_1280.jpg"},
			{fileURL: "http://28.media.tumblr.com/tumblr_lwi9md50yq1qbhms5o1_500.jpg"},
			{fileURL: "http://26.media.tumblr.com/tumblr_ltr2pj8XLo1qejbiro1_1280.jpg"},
			{fileURL: "http://26.media.tumblr.com/tumblr_m2izgaKsKK1roe4b7o1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lbkzpq8Wdl1qeyn79o1_500.jpg"},
			{fileURL: "http://24.media.tumblr.com/JBy6l1Bb3e6gc1t5569JIpsFo1_400.jpg"},
			{fileURL: "http://25.media.tumblr.com/Jjkybd3nSawe7mjxQFgkpLLD_500.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_m4pun7Le6z1r6jd7fo1_400.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m4rlz1mSlk1qd477zo1_1280.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m08wrdCUM01qzfs44o1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_m0umerwZ3L1qznclro1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lzcltq6Nm41r6b7kmo1_1280.jpg"},
			{fileURL: "http://27.media.tumblr.com/tumblr_ll6or0hwpu1qjahcpo1_500.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lhu1ibYWWG1qcn249o1_400.gif"},
			{fileURL: "http://25.media.tumblr.com/tumblr_lz7n2osKoc1qgjltdo1_1280.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_lotzliaGRL1qerv8ko1_1280.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_ltqkckdKIN1r4xjo2o1_1280.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m8nrs5rH981qz5dg8o1_1280.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m48dsbX5rT1qz4ueho1_1280.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_lydzcnA9xo1ro8wkyo1_400.gif"},
			{fileURL: "http://26.media.tumblr.com/tumblr_lv0tadCXmC1r4xjo2o1_500.gif"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m0vgifCuRO1qz5dg8o1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_m3ou81REAY1r73wdao1_500.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_lmk1xicwOR1qiw8wpo1_500.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m3fb01ylXA1qzjc9co1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lh3ypwjdIp1qgnva2o1_500.jpg"},
			{fileURL: "http://24.media.tumblr.com/qgIb8tERioskx485P5H6oaVVo1_500.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m4dg69BzlE1qddbvio1_500.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lzk367VZum1qafc06o1_500.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m59bpv2LBG1qh1pmyo1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lvwnu4YP4H1qdzwiko1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_lmjbqjT6Vl1qb6yb3o1_500.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_m1wva7zKq41qlluv1o1_500.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m1mi3wt6SQ1rrdgjuo1_500.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m34fe7m7KI1qzex9io1_1280.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_kvkqt6uy3t1qzw1zno1_400.gif"},
			{fileURL: "http://27.media.tumblr.com/tumblr_ljv8svkbTQ1qfyzelo1_500.jpg"},
			{fileURL: "http://25.media.tumblr.com/tumblr_m3bywn75Kf1r73wdao1_400.jpg"},
			{fileURL: "http://24.media.tumblr.com/tumblr_m4a4gqLJ111qcxyrro1_1280.jpg"},
			{fileURL: "http://26.media.tumblr.com/tumblr_m06tgxdfDy1r23g2co1_500.jpg"}
		];
		// loop to check for dead links in the seed
		catsSeed.forEach(function (cat) {
			http.get(cat.fileURL, (res) => {
				const statusCode = res.statusCode;
				const contentType = res.headers['content-type'];

				if (statusCode === 200) {
					Cat.create(cat);
					catsSeed.push(cat);
				}
			}).on('error', (e) => {
				console.log(`Got error: ${e.message}`);
			});
		});
	}
});
