import { generateChangelogEntry } from '@monodeploy/changelog'
import type {
    ChangesetSchema,
    MonodeployConfiguration,
    PackageStrategyMap,
    PackageVersionMap,
    YarnContext,
} from '@monodeploy/types'

export const generateChangeset = async ({
    config,
    context,
    previousTags,
    nextTags,
    versionStrategies,
    gitTags,
    workspaceGroups,
}: {
    config: MonodeployConfiguration
    context: YarnContext
    previousTags: PackageVersionMap
    nextTags: PackageVersionMap
    versionStrategies: PackageStrategyMap
    gitTags?: Map<string, string>
    workspaceGroups: Map<string, Set<string>>
}): Promise<ChangesetSchema> => {
    const changesetData: ChangesetSchema = {}

    for (const [packageName, newVersion] of nextTags.entries()) {
        const previousVersion = previousTags.get(packageName) ?? null
        const versionStrategy = versionStrategies.get(packageName)
        let changelog = await generateChangelogEntry({
            config,
            context,
            packageName,
            previousVersion,
            newVersion,
            commits: versionStrategy?.commits ?? [],
        })
        if (changelog !== null) {
            changelog = makeBumpOnlyFilter(packageName)(changelog)
        }
        changesetData[packageName] = {
            version: newVersion,
            previousVersion: previousVersion,
            changelog,
            tag: gitTags?.get(packageName) ?? null,
            strategy: versionStrategy?.type ?? null,
            group: packageName, // overwritten below
        }
    }

    for (const [groupKey, group] of workspaceGroups.entries()) {
        for (const packageName of group) {
            if (!changesetData[packageName]) continue
            changesetData[packageName].group = groupKey ?? packageName
        }
    }

    return changesetData
}


const BLANK_LINE = "\n\n"

function makeBumpOnlyFilter(packageName: string) {
    return (newEntry: string) => {
        // When force publishing, it is possible that there will be no actual changes, only a version bump.
        if (!newEntry.split("\n").some((line) => line.startsWith("*"))) {
            // Add a note to indicate that only a version bump has occurred.
            // TODO: actually list the dependencies that were bumped
            const message = `**Note:** Version bump only for package ${packageName}`;

            // the extra blank lines preserve the whitespace delimiting releases
            return [newEntry.trim(), message, BLANK_LINE].join(BLANK_LINE);
        }

        return newEntry;
    };
}
