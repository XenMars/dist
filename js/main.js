const
    $mobileMenu = document.querySelector('.mobile-menu'),
    $burger = document.querySelector('.header-container__burger'),
    $parents = document.querySelectorAll('.parent')
  
  document.querySelector('.header-container__burger').addEventListener('click', () => {
    $mobileMenu.classList.add('active')
  })
  
  document.querySelector('.mobile-menu__close').addEventListener('click', () => {
    $mobileMenu.classList.remove('active')
  })
  
  document.addEventListener('click', (event) => {
    const
      isInside = $mobileMenu.contains(event.target),
      isBurger = $burger.contains(event.target)
  
  
    if (!isInside && !isBurger) {
      $mobileMenu.classList.remove('active')
    }
  })

  $parents.forEach((parent) => {
    parent.addEventListener('click', () => {
      if (parent.classList.contains('active')) {
        parent.classList.remove('active');
      } else {
        $parents.forEach((other) => {
          if (other.classList.contains('active')) {
            other.classList.remove('active');
          }
        });
        parent.classList.add('active');
      }
    });
  });

  const nav = document.querySelector('.primary-nav');
  let prevScrollpos = window.pageYOffset;
  
  window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      nav.classList.remove('slide-toggle');
    } else {
      if (currentScrollPos > 200) {
        nav.classList.add('slide-toggle');
      }
    }
    prevScrollpos = currentScrollPos;
  });
