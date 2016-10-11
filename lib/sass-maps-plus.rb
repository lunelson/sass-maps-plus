require 'compass'
base_directory  = File.join(File.dirname(__FILE__), '..')
extension_path = File.expand_path(base_directory)
Compass::Frameworks.register(
	'sass-maps-plus',
	:path => extension_path,
	:stylesheets_directory => base_directory
)