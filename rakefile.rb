task :runwindows do
    puts '* Changing the codepage'
    `chcp 65001`
    puts '* Running Jekyll'
    `jekyll serve --watch --baseurl ""`
end

task :runosx do
    puts '* Running Jekyll'
    `jekyll serve --watch --baseurl ""`
end