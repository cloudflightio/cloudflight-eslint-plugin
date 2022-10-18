### @cloudflight/typescript/package-force-absolute-version-dependencies

Using caret or tilde versions means you _blindly_ accept new versions of libraries, which can lead to different issues,
such as:

-   Your build can break, if the library author does not conform to semantic versioning standards.
-   Malware can be introduced in new versions.
