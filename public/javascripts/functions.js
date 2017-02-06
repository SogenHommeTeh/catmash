expected = function(Rb, Ra) {
	return 1 / (1 + Math.pow(10, (Rb - Ra) / 400));
};

win = function(score, expected, k = 24) {
	return score + k * (1 - expected);
};

loss = function(score, expected, k = 24) {
	return score + k * (0 - expected);
};

round = function(number, precision) {
	if (precision > 10)
		precision = 10;
	precision = Math.pow(10, precision);
	return Math.round(number * precision) / precision;
};

vote = function(winnerId, loserId) {
	$.ajax({
		method: 'POST',
		url: '/rank',
		data: {'winnerId': winnerId, 'loserId': loserId},
		dataType: 'html',
		success: function(data) {
			$('#vote_view').html(data);
		},
	});
};