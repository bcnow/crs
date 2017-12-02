(function IIFE() {

	var foo = (x) => {
		var y = x * 2;

		// return function bar(z) {
		var bar = (z) => {
			if (z.length > 3) {
				var baz = (v) => {
					if (v > 3) return v + this.y;
					else return baz(v * 4);
				}
				return z.map(baz);
			} else {
				var obj = [];

				setTimeout(() => {
					obj.length = 1;
					obj[0] = this.w;
				}, 100);

				return obj;
			}
		};
		return bar;
	}

	var p = foo(2);
	var list1 = [1, 3, 4];
	var list2 = list1.concat(6);

	list1 = p.call({
		w: 42
	}, list1);
	list2 = p(list2);

	setTimeout(() => {
		console.log(list1[0] === list2.reduce((s, v) => s + v, 0));
	}, 200);
})();