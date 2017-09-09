task :build do
  sh 'tsc'
end

task :test do
  sh 'jest'
end
