function ft_print_is_negative(number) {
        if (number === 0 || number > 0) {
          return 'P';
        }
        else {
          return 'N';
        }
      }
      console.log(ft_print_is_negative(1), ft_print_is_negative(-1), ft_print_is_negative(0));