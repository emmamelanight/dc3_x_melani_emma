function ft_print_comb2() {
        let arr = [];
        for (let i = 0; i < 100; i++) {
          for (let j = i+1; j < 100; j++) {
            let leftNumber = i < 10 ? '0'+i : i;
            let rightNumber = j < 10 ? '0'+j : j;
            arr.push((leftNumber + ' ' + rightNumber).toString());
          }
        }
        return arr;
      }
      console.log(ft_print_comb2());