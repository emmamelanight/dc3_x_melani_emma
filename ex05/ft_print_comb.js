function ft_print_comb() {
        let arr = [];
        for (let i = 0; i < 10; i++) {
          for (let j = i+1; j < 10; j++) {
            for (let k = j+1; k < 10; k++) {
             arr.push(i.toString() + j.toString() + k.toString());
            }
          }
        }
        return arr;
      }
      console.log(ft_print_comb());