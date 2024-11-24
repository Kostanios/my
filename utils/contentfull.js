import * as contentful from "contentful"

export const TTypeId = {
    CompanyExperience: "companyExperience",
    Skill: "skill",
    Contact: "contact",
    Project: "project",
    Service: "service",
    My: "my",
}

export const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.CONTENTFUL_SPACE,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.CONTENTFUL_SECRET,
})

export const getAllContentByModelTypeId = (
    typeId,
    queryParams = {}
) => {
    return client.getEntries({
        content_type: typeId,
        ...queryParams,
    });
};
