# Run with: ./build.sh

# Save all PHTML files as static HTML
php -f index.phtml > build/index.html
php -f roi-module.phtml > build/roi-module.html
php -f expense-roi-landing-uncookied.phtml > build/expense-roi-landing-uncookied.html
php -f expense-roi-landing-cookied.phtml > build/expense-roi-landing-cookied.html
php -f expense-roi-landing-results.phtml > build/expense-roi-landing-results.html

# Copy folders/content into build
cp -R css/. build/css
cp -R img/. build/img
cp -R js/. build/js

echo Compiled. Great success!