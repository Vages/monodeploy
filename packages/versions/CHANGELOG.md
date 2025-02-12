# Changelog

<!-- MONODEPLOY:BELOW -->

## [3.1.0](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@3.0.2...@monodeploy/versions@3.1.0) "@monodeploy/versions" (2022-07-03)<a name="3.1.0"></a>

### Features

* add registryMode option, deprecated noRegistry ([6945cdb](https://github.com/tophat/monodeploy/commits/6945cdb))




## [3.1.0](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@3.0.2...@monodeploy/versions@3.1.0) "@monodeploy/versions" (2022-07-03)<a name="3.1.0"></a>

### Features

* add registryMode option, deprecated noRegistry ([6945cdb](https://github.com/tophat/monodeploy/commits/6945cdb))




## [3.0.2](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@3.0.1...@monodeploy/versions@3.0.2) "@monodeploy/versions" (2022-06-09)<a name="3.0.2"></a>

### Bug Fixes

* TypeError when registry returns version as array ([bdb19fd](https://github.com/tophat/monodeploy/commits/bdb19fd))




## [3.0.1](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@3.0.0...@monodeploy/versions@3.0.1) "@monodeploy/versions" (2022-05-26)<a name="3.0.1"></a>

### Bug Fixes

* target yarn 3.2.1 (#495) ([e13073f](https://github.com/tophat/monodeploy/commits/e13073f))




## [3.0.0](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.8.16...@monodeploy/versions@3.0.0) "@monodeploy/versions" (2022-04-10)<a name="3.0.0"></a>

### Breaking Changes

* Private workspaces are now no longer pruned prior to dependency graph traversal and when considering version strategies for a group. This means you can create a private workspace as a devDependency of other packages and updates to that private workspace will propagate to the dependents with the correct version strategy -- assuming all these packages are in the same group. The private package, although considered when determining the version strategy, is not published. ([3c10414](https://github.com/tophat/monodeploy/commits/3c10414))
* Monodeploy will now publish the top level workspace if not marked as private, and if a change is detected. This means monodeploy can now be used to publish non-monorepos. ([231029a](https://github.com/tophat/monodeploy/commits/231029a))

### Bug Fixes

* use per-scope fetch registry from .yarnrc.yml, #457 (#458) ([06ea79f](https://github.com/tophat/monodeploy/commits/06ea79f))
* inconsistent behaviour in experimental conventional config (#459) ([b6af42a](https://github.com/tophat/monodeploy/commits/b6af42a))
* compatibility with yarn 3.2.0, update dependencies (#474) ([ba475a5](https://github.com/tophat/monodeploy/commits/ba475a5))
* apply version strategy to largest version among group (#479) ([72b4feb](https://github.com/tophat/monodeploy/commits/72b4feb))
* handle prerelease updates off of non-prerelease base (#480) ([40d8f10](https://github.com/tophat/monodeploy/commits/40d8f10))

### Features

* support grouping packages similar to lerna fixed mode #415 (#453) ([1e8711a](https://github.com/tophat/monodeploy/commits/1e8711a))
* consider private workspaces when determining updates (#468) ([3c10414](https://github.com/tophat/monodeploy/commits/3c10414))
* support publishing the top level workspace (#473) ([231029a](https://github.com/tophat/monodeploy/commits/231029a))
* deprecate --prepend-changelog in favour of --changelog-filename ([7e2dc3b](https://github.com/tophat/monodeploy/commits/7e2dc3b))
* add --apply-changeset cli flag ([7e2dc3b](https://github.com/tophat/monodeploy/commits/7e2dc3b))
* add warning when version bump is not applied, close #471 (#486) ([0e1e521](https://github.com/tophat/monodeploy/commits/0e1e521))




## [0.8.16](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.8.15...@monodeploy/versions@0.8.16) "@monodeploy/versions" (2022-04-07)<a name="0.8.16"></a>

### Bug Fixes

* handle prerelease updates off of non-prerelease base (#481) ([f8cffee](https://github.com/tophat/monodeploy/commits/f8cffee))




## [0.8.13](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.8.12...@monodeploy/versions@0.8.13) "@monodeploy/versions" (2021-12-06)<a name="0.8.13"></a>

### Bug Fixes

* update internal yarn dependencies to 3.1.1 (#451) ([ff07de7](https://github.com/tophat/monodeploy/commits/ff07de7))




## [0.8.9](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.8.8...@monodeploy/versions@0.8.9) "@monodeploy/versions" (2021-10-25)<a name="0.8.9"></a>

### Bug Fixes

* update to yarn 3.1.0 (#440) ([5eb4ad0](https://github.com/tophat/monodeploy/commits/5eb4ad0))




## [0.8.8](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.8.7...@monodeploy/versions@0.8.8) "@monodeploy/versions" (2021-10-11)<a name="0.8.8"></a>

### Bug Fixes

* update internal yarn dependencies (#433) ([a8d6fcb](https://github.com/tophat/monodeploy/commits/a8d6fcb))
* use cross platform exec for windows support (#434) ([3dcbfb4](https://github.com/tophat/monodeploy/commits/3dcbfb4))
* support windows (#431) ([8a42a96](https://github.com/tophat/monodeploy/commits/8a42a96))




## [0.8.7](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.8.6...@monodeploy/versions@0.8.7) "@monodeploy/versions" (2021-09-15)<a name="0.8.7"></a>

### Bug Fixes

* update yarn dependencies (#429) ([03a82b7](https://github.com/tophat/monodeploy/commits/03a82b7))




## [0.8.2](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.8.1...@monodeploy/versions@0.8.2) "@monodeploy/versions" (2021-08-12)<a name="0.8.2"></a>

### Bug Fixes

* use a portable path when determining modified files ([3b01f93](https://github.com/tophat/monodeploy/commits/3b01f93))




## [0.8.1](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.8.0...@monodeploy/versions@0.8.1) "@monodeploy/versions" (2021-07-26)<a name="0.8.1"></a>

### Bug Fixes

* update to yarn v3.0.0 ([c40a226](https://github.com/tophat/monodeploy/commits/c40a226))
* update to yarn v3.0.0 (#414) ([c40a226](https://github.com/tophat/monodeploy/commits/c40a226))




## [0.8.0](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.7.3...@monodeploy/versions@0.8.0) "@monodeploy/versions" (2021-07-26)<a name="0.8.0"></a>

### Features

* add commit ignore patterns config option (#413) ([7f503c4](https://github.com/tophat/monodeploy/commits/7f503c4))




## [0.7.2](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.7.1...@monodeploy/versions@0.7.2) "@monodeploy/versions" (2021-07-15)<a name="0.7.2"></a>

### Bug Fixes

* use accurate from version in changeset and logging (#404) ([45a1a74](https://github.com/tophat/monodeploy/commits/45a1a74))




## [0.7.1](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.7.0...@monodeploy/versions@0.7.1) "@monodeploy/versions" (2021-07-12)<a name="0.7.1"></a>

### Bug Fixes

* add missing changelog dependency (#400) ([ff94e0c](https://github.com/tophat/monodeploy/commits/ff94e0c))




## [0.7.0](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.6.3...@monodeploy/versions@0.7.0) "@monodeploy/versions" (2021-07-12)<a name="0.7.0"></a>

### Features

* support custom configuration for conventional changelog config ([5312462](https://github.com/tophat/monodeploy/commits/5312462))




## [0.6.3](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.6.2...@monodeploy/versions@0.6.3) "@monodeploy/versions" (2021-07-09)<a name="0.6.3"></a>

### Bug Fixes

* support conventional changelog config factory functions (#396) ([13a2904](https://github.com/tophat/monodeploy/commits/13a2904))




## [0.6.1](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.6.0...@monodeploy/versions@0.6.1) "@monodeploy/versions" (2021-07-05)<a name="0.6.1"></a>

### Bug Fixes

* update yarn to 3.0.0-rc.9 (#386) ([fcfc63a](https://github.com/tophat/monodeploy/commits/fcfc63a))




## [0.6.0](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.5.3...@monodeploy/versions@0.6.0) "@monodeploy/versions" (2021-07-05)<a name="0.6.0"></a>

### Bug Fixes

* refactor APIs to support non-latest dist tag (#374) ([a5c703e](https://github.com/tophat/monodeploy/commits/a5c703e))
* use and support repository url with subdirectories (#384) ([a5c703e](https://github.com/tophat/monodeploy/commits/a5c703e))

### Features

* pre-release support, close #292 ([a5c703e](https://github.com/tophat/monodeploy/commits/a5c703e))
* support resetting pre-release version if out of date ([a5c703e](https://github.com/tophat/monodeploy/commits/a5c703e))




## [0.5.3](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.5.2...@monodeploy/versions@0.5.3) "@monodeploy/versions" (2021-06-15)<a name="0.5.3"></a>

### Bug Fixes

* normalize registry url (#369) ([824b062](https://github.com/tophat/monodeploy/commits/824b062))




## [0.5.2](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.5.1...@monodeploy/versions@0.5.2) "@monodeploy/versions" (2021-06-11)<a name="0.5.2"></a>

### Bug Fixes

* preserve workspace protocol when persisting package.json to disk ([b2d532d](https://github.com/tophat/monodeploy/commits/b2d532d))
* preserve workspace protocol when persisting package.json to disk (#359) ([b2d532d](https://github.com/tophat/monodeploy/commits/b2d532d))




## [0.5.0](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.4.6...@monodeploy/versions@0.5.0) "@monodeploy/versions" (2021-06-06)<a name="0.5.0"></a>

### Features

* add changeset ignore patterns support (#353) ([9f5fec6](https://github.com/tophat/monodeploy/commits/9f5fec6))




## [0.4.6](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.4.5...@monodeploy/versions@0.4.6) "@monodeploy/versions" (2021-06-06)<a name="0.4.6"></a>

### Performance Improvements

* update yarn dependencies ([ef6f096](https://github.com/tophat/monodeploy/commits/ef6f096))
* update yarn dependencies (#348) ([ef6f096](https://github.com/tophat/monodeploy/commits/ef6f096))




## [0.4.5](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.4.4...@monodeploy/versions@0.4.5) "@monodeploy/versions" (2021-06-02)<a name="0.4.5"></a>



## [0.4.1](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.4.0...@monodeploy/versions@0.4.1) "@monodeploy/versions" (2021-05-06)<a name="0.4.1"></a>

### Bug Fixes

* **versions**: handle jfrog 500s from new packages (#331) ([3b2f155](https://github.com/tophat/monodeploy/commits/3b2f155))




## [0.4.0](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.3.8...@monodeploy/versions@0.4.0) "@monodeploy/versions" (2021-04-28)<a name="0.4.0"></a>

### Features

* **cli**: add network concurrency options to limit concurrent publishes ([#319](https://github.com/tophat/monodeploy/issues/319)) ([db84fc7](https://github.com/tophat/monodeploy/commits/db84fc7))


## [0.3.8](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.3.7...@monodeploy/versions@0.3.8) "@monodeploy/versions" (2021-04-26)<a name="0.3.8"></a>

### Bug Fixes

* **versions:** check original error for a 404 ([#316](https://github.com/tophat/monodeploy/issues/316)) ([55833fa](https://github.com/tophat/monodeploy/commits/55833fa))


## [0.3.7](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.3.6...@monodeploy/versions@0.3.7) "@monodeploy/versions" (2021-04-26)<a name="0.3.7"></a>


## [0.3.6](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.3.5...@monodeploy/versions@0.3.6) "@monodeploy/versions" (2021-04-23)<a name="0.3.6"></a>

### Bug Fixes

* **versions:** respect registryUrl when fetching tags ([#313](https://github.com/tophat/monodeploy/issues/313)) ([9d91efd](https://github.com/tophat/monodeploy/commits/9d91efd))


## [0.3.5](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.3.4...@monodeploy/versions@0.3.5) "@monodeploy/versions" (2021-04-13)<a name="0.3.5"></a>


## [0.3.4](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.3.3...@monodeploy/versions@0.3.4) "@monodeploy/versions" (2021-04-12)<a name="0.3.4"></a>

### Bug Fixes

* target yarn v3 release candidate ([#304](https://github.com/tophat/monodeploy/issues/304)) ([d90765c](https://github.com/tophat/monodeploy/commits/d90765c))


## [0.3.3](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.3.2...@monodeploy/versions@0.3.3) "@monodeploy/versions" (2021-04-12)<a name="0.3.3"></a>

### Bug Fixes

* **node:** skip incompatible plugins ([#303](https://github.com/tophat/monodeploy/issues/303)) ([ba80bae](https://github.com/tophat/monodeploy/commits/ba80bae))


## [0.3.2](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.3.1...@monodeploy/versions@0.3.2) "@monodeploy/versions" (2021-04-09)<a name="0.3.2"></a>


## [0.3.1](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.3.0...@monodeploy/versions@0.3.1) "@monodeploy/versions" (2021-04-09)<a name="0.3.1"></a>

### Bug Fixes

* **publish:** upload to npm the most recent package manifest ([#299](https://github.com/tophat/monodeploy/issues/299)) ([4fb8f46](https://github.com/tophat/monodeploy/commits/4fb8f46))


## [0.3.0](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.2.1...@monodeploy/versions@0.3.0) "@monodeploy/versions" (2021-04-07)<a name="0.3.0"></a>

### Features

* add config option to skip registry reads and writes ([#296](https://github.com/tophat/monodeploy/issues/296)) ([ad1fe9b](https://github.com/tophat/monodeploy/commits/ad1fe9b))


## [0.2.1](https://github.com/tophat/monodeploy/compare/@monodeploy/changelog@0.2.0...@monodeploy/changelog@0.2.1) "@monodeploy/changelog" (2021-03-10)<a name="0.2.1"></a>

### Bug Fixes

* bump versions to release ([#284](https://github.com/tophat/monodeploy/issues/284)) ([dc93dcf](https://github.com/tophat/monodeploy/commits/dc93dcf))


## [0.2.1](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.2.0...@monodeploy/versions@0.2.1) "@monodeploy/versions" (2021-03-10)<a name="0.2.1"></a>

### Bug Fixes

* **publish:** default to registry tags, if no intended update ([#279](https://github.com/tophat/monodeploy/issues/279)) ([dc93dcf](https://github.com/tophat/monodeploy/commits/dc93dcf))
* bump versions to release ([#284](https://github.com/tophat/monodeploy/issues/284)) ([dc93dcf](https://github.com/tophat/monodeploy/commits/dc93dcf))


## [0.2.0](https://github.com/tophat/monodeploy/compare/@monodeploy/versions@0.1.1...@monodeploy/versions@0.2.0) "@monodeploy/versions" (2021-03-08)<a name="0.2.0"></a>

### Features

* add topological sort, support for previewing changes ([#273](https://github.com/tophat/monodeploy/issues/273)) ([87b6a00](https://github.com/tophat/monodeploy/commits/87b6a00))
* rename private monodeploy packages for improved readability under scope ([#277](https://github.com/tophat/monodeploy/issues/277)) ([87b6a00](https://github.com/tophat/monodeploy/commits/87b6a00))
