Gem::Specification.new do |s|
  # Release Specific Information
  s.version = "0.9.0"
  s.date = "2015-01-05"
  s.licenses = ['MIT']

  # Gem Details
  s.name = "sass-maps-plus"
  s.authors = ["Lu Nelson"]
  s.summary = %q{Advanced map and list-map manipulation for all versions of Sass}
  s.description = %q{Advanced map and list-map manipulation for all versions of Sass}
  s.email = "lunelson@gmail.com"
  s.homepage = "https://github.com/lunelson/sass-maps-plus"

  # Gem Files
  s.files = Dir['README.md','LICENSE','_sass-maps-plus.scss']
  s.files += Dir.glob("lib/**/*.*")

  # Gem Bookkeeping
  s.rubygems_version = %q{1.3.6}
  s.add_dependency("compass", ["~> 0.12.0"])
  s.add_dependency("sass", ["~> 3.2.0"])
end
